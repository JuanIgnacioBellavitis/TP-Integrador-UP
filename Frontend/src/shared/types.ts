export interface BaseApiParams {
    url: string,
    unauthorizedCallback?: (...args: any[]) => void,
    showSuccessMsg?: boolean
}


export interface PostParams extends BaseApiParams {
    body: any,
    token?: string
}

export interface UserData {
    username: string,
    password: string
}