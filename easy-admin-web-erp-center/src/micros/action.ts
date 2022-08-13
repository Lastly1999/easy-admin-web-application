import { initGlobalState } from "qiankun"
import store from "@/app/store"
import {setInsideUserInfo, setToken} from "@/festures/auth/authSlice";

const initialState = {
	accessToken: "",
	refreshToken: '',
	userInfo:{}
}

const action = initGlobalState(initialState)

action.onGlobalStateChange((state, preState) => {
	console.log("microApps change before globalState =========>>>", preState)
	console.log("microApps change after   globalState =========>>>", state)
	// 子应用授权状态变更
	store.dispatch(setToken({ accessToken: state.accessToken, refreshToken: state.refreshToken }))
	store.dispatch(setInsideUserInfo(state.userInfo))
}, true)

export default action