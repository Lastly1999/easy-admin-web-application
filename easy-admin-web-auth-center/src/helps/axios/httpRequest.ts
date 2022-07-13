import HttpInterceptor from "./interceptor"
import {openNotification} from "@/helps/antd/antd"
import {IJsonResult} from "@/types/global"
import store from "@/redux";

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
            const storeState = store.getState()
            console.log("🚀 ~ file: httpRequest.ts ~ line 19 ~ storeState", storeState)
            const accessToken = storeState?.accessToken;
            const refreshToken = storeState?.refreshToken;
            (config.headers as IHttpHeadersOptions)["authorization"] = accessToken;
            (config.headers as IHttpHeadersOptions)["RefreshToken"] = refreshToken;
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
            if (eof.response.status === 401) {
                // jwtInvalidHandler(eof.response.status)
            }
            handelHttpError(eof.response.data.message)
            throw new Error(eof.response.data.msg);
        }
    }
})

const jwtInvalidHandler = (code: number) => {
    if (code === 401) {
        sessionStorage.removeItem("persist:root")
    }
}

const handelApiError = <T>(data: IJsonResult<T>) => {
    return openNotification({type: "error", message: "温馨提示", description: data.msg})
}

const handelHttpError = (description: string) => {
    return openNotification({type: "error", message: "出错啦!", description})
}

export default httpRequest