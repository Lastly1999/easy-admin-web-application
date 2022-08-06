import httpRequest from "@/helps/axios/httpRequest"

enum userApi {
    GET_USERS = "/user",
}

/**
 * 获取用户列表
 */
export function getUsers(){
    return httpRequest.get<null,any[]>(userApi.GET_USERS)
}
