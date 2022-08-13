import type { IJsonResult } from "@/types/global"
import HttpInterceptor from "./interceptor"
import { openNotification } from "@/helps/antd/antd"
import { history } from "@/router/browserHistory"


type IHttpHeadersOptions = {
    [index: string]: any
}

/**
 * http request create for HttpInterceptor class instance
 */
const httpRequest = new HttpInterceptor({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    timeout: Number(import.meta.env.VITE_APP_TIME_OUT),
    interceptor: {
        requestInterceptors: (config) => {
            const storeData = localStorage.getItem("persist:root") ? JSON.parse(localStorage.getItem("persist:root") as string) : null
            if (storeData) {
                const appAuthStore = JSON.parse(storeData.auth)
                const accessToken = appAuthStore.accessToken;
                const refreshToken = appAuthStore.refreshToken;
                (config.headers as IHttpHeadersOptions)["authorization"] = accessToken;
                (config.headers as IHttpHeadersOptions)["refreshToken"] = refreshToken;
            }
            return config
        },
        requestInterceptorsCatch: eof => eof,
        responseInterceptors: response => {
            if (response.data.statusCode !== 200) {
                handelApiError(response.data)
                throw new Error(response.data.msg)
            }
            return response
        },
        responseInterceptorsCatch: eof => {
            if ([401].includes(eof.response.status)) {
                jwtInvalidHandler()
            } else {
                handelHttpError(eof.response.data.message)
            }
            throw new Error(eof.response.data.msg);
        }
    }
})

const jwtInvalidHandler = () => {
    localStorage.removeItem("persist:root")
    history.push("/authorization")
    openNotification({ type: "error", message: "登录授权已过期", description: "请重新登录!" })
}

const handelApiError = <T>(data: IJsonResult<T>) => {
    return openNotification({ type: "error", message: "温馨提示", description: data.message })
}

const handelHttpError = (description: string) => {
    return openNotification({ type: "error", message: "出错啦!", description })
}

export default httpRequest