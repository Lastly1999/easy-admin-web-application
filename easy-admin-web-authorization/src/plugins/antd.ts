import { App } from "vue"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.less"

const setupAntd = (app: App<Element>) => {
	app.use(Antd)
}

export default setupAntd