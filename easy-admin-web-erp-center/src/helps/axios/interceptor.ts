import {HttpRequestInterceptorConfig, HttpRequestInterceptors} from "@/types/axios"
import {IJsonResult} from "@/types/global"
import axios, {AxiosInstance, AxiosRequestConfig} from "axios"

/**
 * axios拦截器类
 */
class HttpInterceptor {
    axiosInstance: AxiosInstance
    axiosInterceptors: HttpRequestInterceptors

    constructor(config: HttpRequestInterceptorConfig) {
        this.axiosInstance = axios.create(config)
        this.axiosInterceptors = config.interceptor
        // 请求拦截
        this.axiosInstance.interceptors.request.use(this.axiosInterceptors.requestInterceptors, this.axiosInterceptors.requestInterceptorsCatch)
        // 响应拦截
        this.axiosInstance.interceptors.response.use(this.axiosInterceptors.responseInterceptors, this.axiosInterceptors.responseInterceptorsCatch)
    }

    httpRequest<T>(config: AxiosRequestConfig): Promise<IJsonResult<T>> {
        return new Promise((resolve, reject) => {
            this.axiosInstance(config)
                .then(res => {
                    resolve(res?.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    post<T = any, K = any>(url: string, data?: T) {
        return this.httpRequest<K>({method: "POST", url, data})
    }

    get<T = any, K = any>(url: string, data?: T) {
        return this.httpRequest<K>({method: "GET", url, data})
    }

    patch<T = any, K = any>(url: string, data?: T) {
        return this.httpRequest<K>({method: "PATCH", url, data})
    }

    delete<T = any, K = any>(url: string, data?: T) {
        return this.httpRequest<K>({method: "DELETE", url, data})
    }

    put<T = any, K = any>(url: string, data?: T) {
        return this.httpRequest<K>({method: "PUT", url, data})
    }
}

export default HttpInterceptor