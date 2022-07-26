import { registerMicroApps, start } from "qiankun"
import { history } from "@/router/browserHistory"
import action from "@/micros/action"

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
		props: {
			microAppRouter: history,
			action
		}
	},
	{
		name: "business",
		entry: "http://localhost:5173",
		container: "#business",
		activeRule: "/business",
		props: {
			microAppRouter: history,
			action
		}
	}
])

// setDefaultMountApp('/authorization');

start()