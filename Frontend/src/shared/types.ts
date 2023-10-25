export interface BaseApiParams {
    url: string,
    unauthorizedCallback?: (...args: any[]) => void,
    showSuccessMsg?: boolean
}

export interface GetParams extends BaseApiParams {}

export interface PostParams extends BaseApiParams {
    body: any,
    token?: string
}

export interface UserData {
    username: string,
    password: string
};

export interface CharactersProps {
    _id: string,
    userId: string,
    headId: number,
    tshirtId: number,
    pantsId: number,
    shoesId: number,
    characterName: string,
}