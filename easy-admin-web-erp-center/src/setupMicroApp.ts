import { registerMicroApps, start, setDefaultMountApp } from "qiankun"

/**
 * 设置子应用配置项
 */
registerMicroApps([
	// 授权中心
	{
		name: "authorization",
		entry: "http://localhost:3001",
		container: "#authorization",
		activeRule: "/authorization"
	},
	{
		name: "business",
		entry: "http://localhost:5173",
		container: "#business",
		activeRule: "/business"
	}
])

setDefaultMountApp('/authorization');

start()