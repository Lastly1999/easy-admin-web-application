import {App} from "vue"
import router from "@/router";

const setupVueRouter = (app: App<Element>) => {
    app.use(router)
}

export default setupVueRouter