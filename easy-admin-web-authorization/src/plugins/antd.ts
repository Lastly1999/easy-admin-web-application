import { App } from "vue"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

const setupAntd = (app: App<Element>) => {
	app.use(Antd)
}

export default setupAntd