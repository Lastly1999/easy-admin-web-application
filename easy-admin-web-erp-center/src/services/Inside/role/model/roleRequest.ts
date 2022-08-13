import {Pager} from "@/services/model/commonRequest";

export type GetRolesParams = {

} & Pager

export type PutRoleForm = {
    roleName:string
    name:string
    userId?:number;
    roleRemark:string
    roleMenuIds:number[]
    roleDepIds:number[]
}