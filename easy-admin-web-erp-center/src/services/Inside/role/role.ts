import httpRequest from "@/helps/axios/httpRequest"
import {GetRolesParams, PutRoleForm} from "@/services/Inside/role/model/roleRequest";
import {GetRoleInfo, GetRolesItem} from "@/services/Inside/role/model/roleResponse";

enum UserApi {
    GET_ROLES = "/role",
    GET_ROLE_INFO = "/role",
    PUT_ROLE = "/role"
}

/**
 * 获取角色列表
 */
export function getRoles(getRolesParams:GetRolesParams){
    return httpRequest.post<GetRolesParams,GetRolesItem[]>(UserApi.GET_ROLES,getRolesParams)
}

/**
 * 添加角色
 * @param putRoleForm
 */
export function putRole(putRoleForm:PutRoleForm){
    return httpRequest.put<PutRoleForm,null>(UserApi.PUT_ROLE,putRoleForm)
}

/**
 * 获取角色详情
 * @param roleId
 */
export function getRoleInfo(roleId:string){
    return httpRequest.get<undefined,GetRoleInfo>(`${UserApi.GET_ROLE_INFO}/${roleId}`)
}