import {registerMicroApps, start, setDefaultMountApp, initGlobalState, MicroAppStateActions} from "qiankun"
import store from "@/redux"
import {history} from "@/router/browserHistory"
import {setInsideUserInfo} from "@/redux/festures/auth/authSlice";

/**
 * 设置子应用配置项
 */
registerMicroApps([
	// 授权中心
	{
		name: "authorization",
		entry: "http://localhost:3001",
		container: "#authorization",
		activeRule: "/authorization",
		props:{
			microAppRouter:history,
			microAppEmit:{
				login:() => {
					store.dispatch(setInsideUserInfo({ roleId:1,userName:"test" }))
				}
			}
		}
	},
	{
		name: "business",
		entry: "http://localhost:5173",
		container: "#business",
		activeRule: "/business"
	}
])

// 初始化主应用的全局state
const actions:MicroAppStateActions = initGlobalState(store.getState());

actions.onGlobalStateChange((state, prev) => {
	// state: 变更后的状态; prev 变更前的状态
	console.log(state, prev);
});

setDefaultMountApp('/authorization');

start()