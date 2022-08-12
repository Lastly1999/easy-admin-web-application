export type PutMenuInfo = {
	menuId?:number;
	menuPid?: number;
	menuName: string;
	menuRouter: string;
	menuPerms: string;
	menuType: number;
	menuIcon: string;
	menuOrderNum: number;
	menuIsShow: boolean;
}

export type UpdateMenuInfo = {
	menuName: string;
	menuRouter: string;
	menuPerms: string;
	menuType: number;
	menuIcon: string;
	menuOrderNum: number;
	menuIsShow: boolean;
}