import { BaseApiParams, PostParams } from "./types";

const getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Prefer", `return=representation`);
    headers.append("Access-Control-Allow-Origin", "http://localhost:5173/");
    return headers;
}

const apiPost = async (params: PostParams) => {
    const { url } = params;
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(params.body),
        headers: getHeaders(),
    });

    return processJsonResponse(params, response, {
        method: "POST",
        body: params.body,
        url: url
    })
};

const processJsonResponse = async (params: BaseApiParams, response: Response, reprocessData: any) => {
    const contentType = response.headers.get("Content-Type");

    if (response.status === 200 && contentType?.indexOf("application/json") !== -1) {
        return await response.json();
    } else if (response.status === 200){
        return await response.text();
    } else if (response.status === 201){
        const r: any = await response.text();
        return JSON.parse(r);
    } else if (response.status === 500){
        return response;
    }

    return await processResponse(params, response);
}

const processResponse = async (params: BaseApiParams, response: any) => {
    let message: string | undefined = undefined;
    const code = response.status;

    switch(code) {
        case 401: 
            message = "Se ha producido un error. Verifique credenciales."
            break;

        case 404:
            throw new Error("Error inseperado");
        case 405:
        case 422:
        case 400:
        case 403:
        case 409:
            const errorMsg = (await getErrorFromServiceResponse(response)) || "Error inesperado";
            if (errorMsg) {
                throw new Error(errorMsg);
            }
            break;
        case 415:
        case 500:
            message = await response.text();
    }

    return message && message.replace(/['"]+/g, "");
};

const getErrorFromServiceResponse = async (response: any) => {
    const objectResponse = await response.json();
    if (objectResponse && objectResponse.errors && Array.isArray(objectResponse.errors) && objectResponse.errors.length) {
        const firstError = objectResponse.errors[0];
        if (firstError) {
            return firstError.errorMessage || firstError.errorCode;
        }
    } else if (objectResponse.message) {
        return objectResponse.message;
    } else if (objectResponse.msg) {
        return objectResponse.msg;
    } else if (objectResponse.error_description) {
        return objectResponse.error_description;
    }

    return null;
}

export {
    apiPost
}