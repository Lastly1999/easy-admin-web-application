import {App} from 'vue'
import {createPinia} from 'pinia'

const setupPinia = (app: App<Element>) => {
    const pinia = createPinia()
    app.use(pinia)
}

export default setupPinia