import { initGlobalState } from "qiankun"
import store from "@/redux"
import { setToken } from "@/redux/festures/auth/authSlice";

const initialState = {
	accessToken: "",
	refreshToken: ''
}

const action = initGlobalState(initialState)

action.onGlobalStateChange((state, preState) => {
	console.log("microApps change before globalState =========>>>", preState)
	console.log("microApps change after   globalState =========>>>", state)
	// 子应用授权状态变更
	store.dispatch(setToken({ accessToken: state.accessToken, refreshToken: state.refreshToken }))
}, true)

export default action