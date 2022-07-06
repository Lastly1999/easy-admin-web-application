import {createApp} from 'vue'
import App from './App'
// setup plugins
import setupPinia from "@/plugins/pinia"
import setupVueRouter from "@/plugins/router";

const VueApp = createApp(App)

// start setup plugins
setupPinia(VueApp)
setupVueRouter(VueApp)

VueApp.mount('#app')
