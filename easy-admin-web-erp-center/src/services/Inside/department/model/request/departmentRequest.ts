export type PutDepartmentRequest = {
	depName: string;
	parentId: number;
	orderNum: number;
}

export type GetDepartmentRequest = {
	key: string;
	createdAt: string;
	id: number;
	name: string;
	orderNum: number;
	parentId: number;
	updatedAt: string;
}