export type GetRolesItem = {
    createdAt:string
    id: number
    label: string
    name:string
    remark: string
    updatedAt: string
    userId: string
}

export type GetRoleInfo = {
    name: string;
    roleRemark: string;
    roleDepIds: number[];
    roleMenuIds: number[];
    roleName: string;
    userId: string;
}