export type MenusItemInfo = {
	id: number;
	parentId: number;
	name: string;
	router: string;
	perms: string;
	type: number;
	icon: string;
	orderNum: number;
	isShow: boolean;
	children: MenusItemInfo[];
}