import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path"
import qiankun from 'vite-plugin-qiankun';

const readEnvConfig = (mode: any) => {
    return loadEnv(mode, __dirname)
}

// https://vitejs.dev/config/
export default ({ mode }) => {
    const envConfig = readEnvConfig(mode)
    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            qiankun("authorization", {
                useDevMode: true
            }),
        ],
        base: "/",
        server: {
            cors: true,
            port: Number(envConfig.VITE_APP_PORT)
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        }
    })
}
