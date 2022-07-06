import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path"
// @ts-ignore
import Components from 'unplugin-vue-components'
// @ts-ignore
import {AntDesignVueResolver} from 'unplugin-vue-components/dist/resolvers';


const readEnvConfig = (mode: any) => {
    return loadEnv(mode, __dirname)
}

// https://vitejs.dev/config/
export default ({mode}) => {
    const envConfig = readEnvConfig(mode)
    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            Components({
                resolvers: [AntDesignVueResolver()],
            })
        ],
        server: {
            port: Number(envConfig.VITE_APP_PORT)
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        }
    })
}
