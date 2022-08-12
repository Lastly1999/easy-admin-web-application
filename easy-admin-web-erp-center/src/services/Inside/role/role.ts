import httpRequest from "@/helps/axios/httpRequest"
import {GetRolesParams} from "@/services/Inside/role/model/roleRequest";
import {GetRolesItem} from "@/services/Inside/role/model/roleResponse";

enum userApi {
    GET_ROLES = "/role",
}

/**
 * 获取角色列表
 */
export function getRoles(getRolesParams:GetRolesParams){
    return httpRequest.post<GetRolesParams,GetRolesItem[]>(userApi.GET_ROLES,getRolesParams)
}
