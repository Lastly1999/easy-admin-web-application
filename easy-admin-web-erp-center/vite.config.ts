import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'


// https://vitejs.dev/config/
export default ({ mode, command }) => {
    // 环境变量读取
    const envConfig = loadEnv(mode, __dirname)
    // 返回vite配置
    return defineConfig({
        plugins: [
            react(),
            createStyleImportPlugin({
                resolves: [AntdResolve()]
            }),
        ],
        server: {
            port: parseInt(envConfig.VITE_APP_PORT),
            proxy: {
                [envConfig.VITE_APP_API_BASE_URL]: {
                    target: envConfig.VITE_APP_API_URL, // 接口基地址
                    rewrite: path => {
                        return path.replace(/^\/api/, '');
                    }
                }
            },
        },
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src")
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