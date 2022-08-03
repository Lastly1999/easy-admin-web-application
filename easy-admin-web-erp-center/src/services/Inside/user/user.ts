import httpRequest from "@/helps/axios/httpRequest"

enum userApi {
    GET_USERS = "/user",
    GET_AUTH_MENU_API = "/user",
}

/**
 * 获取用户列表
 */
export function getUsers(){
    return httpRequest.get<null,any[]>(userApi.GET_USERS)
}
