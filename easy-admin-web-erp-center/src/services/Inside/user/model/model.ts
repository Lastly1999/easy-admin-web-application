/**
 * 新增用户
 */
export type PutUserRequest = {
	userName: string
	name: string
	email: string
	depId: number
	nikeName: string
}

export type UpdateUserRequest = {

} & PutUserRequest

export type GetUsersRequest = {
	depId?: number
}

export type GetUserInfoResponse = {
	id: number;
	departmentId: number;
	name: string;
	userName: string;
	nickName: string;
	headImg: string;
	email: string;
	phone: string;
	remark: string;
	status: number;
}