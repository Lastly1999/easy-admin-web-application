import httpRequest from "@/helps/axios/httpRequest";
import {PutMenuInfo, UpdateMenuInfo} from "./model/menuRequest";
import { MenusItemInfo } from "./model/menuResponse";

enum MenuApi {
	GET_MENUS = "/menu",
	PUT_MENU = "/menu",
	DEL_MENU = "/menu",
	GET_MENU_INFO = "/menu",
	PATCH_MENU_INFO = "/menu"
}

/**
 * 获取系统菜单
 */
export function getMenus() {
	return httpRequest.post<undefined, MenusItemInfo[]>(MenuApi.GET_MENUS);
}

/**
 * 创建系统菜单
 * @param putMenuInfo 
 */
export function putMenu(putMenuInfo: PutMenuInfo) {
	return httpRequest.put<PutMenuInfo, null>(MenuApi.PUT_MENU, putMenuInfo)
}

/**
 * 删除系统菜单
 * @param menuId
 */
export function delMenu(menuId:string){
	return httpRequest.delete(`${MenuApi.DEL_MENU}/${menuId}`)
}

/**
 * 获取系统菜单详情
 * @param menuId
 */
export function getMenuInfo(menuId:string){
	return httpRequest.get<undefined,MenusItemInfo>(`${MenuApi.DEL_MENU}/${menuId}`)
}

/**+
 * 更新系统菜单信息
 * @param menuId
 * @param updateMenuInfo
 */
export function updateMenuInfo(updateMenuInfo:UpdateMenuInfo,menuId:string){
	return httpRequest.patch<UpdateMenuInfo,undefined>(`${MenuApi.DEL_MENU}/${menuId}`,updateMenuInfo)
}