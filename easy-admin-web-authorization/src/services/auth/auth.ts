import httpRequest from "@/helps/axios/httpRequest";
import {ILoginInfo} from "@/services/model/auth/auth";

enum authApi {
    LOGIN_API = "/auth/login",
}

/**
 * @desc 内部系统登录
 * @author lastly1999
 * @date 17:29
 */
export function loginAction(loginInfo: ILoginInfo) {
    return httpRequest.post(authApi.LOGIN_API, loginInfo)
}