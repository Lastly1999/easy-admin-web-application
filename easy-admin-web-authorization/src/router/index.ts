import { createRouter, createWebHistory, Router } from "vue-router"
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';


const appRouter: Router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/authorization' : ''),
    routes: [
        {
            path: "/",
            component: () => import("@/pages/Inside/Login/Login")
        }
    ]
})

export default appRouter