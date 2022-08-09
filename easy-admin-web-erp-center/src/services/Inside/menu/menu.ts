import httpRequest from "@/helps/axios/httpRequest";
import { PutMenuInfo } from "./model/menuRequest";
import { MenusItemInfo } from "./model/menuResponse";

enum MenuApi {
	GET_MENUS = "/menus",
	PUT_MENU = "/menus",
}

/**
 * 获取系统菜单
 */
export function getMenus() {
	return httpRequest.get<undefined, MenusItemInfo[]>(MenuApi.GET_MENUS);
}

/**
 * 创建系统菜单
 * @param putMenuInfo 
 */
export function putMenu(putMenuInfo: PutMenuInfo) {
	return httpRequest.put<PutMenuInfo, null>(MenuApi.PUT_MENU, putMenuInfo)
}