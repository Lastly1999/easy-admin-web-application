import httpRequest from "@/helps/axios/httpRequest"

enum userApi {
    GET_ROLES = "/role",
}

/**
 * 获取用户列表
 */
export function getRoles(){
    return httpRequest.get<null,any[]>(userApi.GET_ROLES)
}
