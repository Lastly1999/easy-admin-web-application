import {createRouter, createWebHistory, Router} from "vue-router"

const appRouter: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            component: () => import("@/pages/Inside/Login/Login")
        }
    ]
})

export default appRouter