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
            port: Number(envConfig.VITE_APP_PORT),
            origin: "http://localhost:3001",
            proxy: {
                [envConfig.VITE_APP_BASE_URL]: {
                    target: envConfig.VITE_APP_API_URL,
                    changeOrigin: false,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    modifyVars: {
                        '@primary-color': '#4377FE',//设置antd主题色
                    },
                    charset: false,
                    additionalData: '@import "./src/assets/style/global.less";',
                },
            }
        }
    })
}
