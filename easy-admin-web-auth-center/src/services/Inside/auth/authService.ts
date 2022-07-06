import httpRequest from "@/helps/axios/httpRequest"

/**
 * @desc 内部系统登录
 * @author lastly1999
 * @date 17:29
 */
export function loginAction(loginInfo: any) {
    return httpRequest.post("/auth/login", loginInfo)
}

/**
 * @desc 获取用户授权菜单
 * @author lastly1999
 * @date 0:04
 */
export function getAuthMenus() {
    return httpRequest.get("/auth/menus")
}