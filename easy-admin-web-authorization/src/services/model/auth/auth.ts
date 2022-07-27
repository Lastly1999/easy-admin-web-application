export interface ILoginInfo {
    userName: string
    passWord: string
}

export interface SignInResult {
    token: {
        accessToken: string
        refreshToken: string
    },
    userInfo: {}
}