import {AxiosRequestConfig, AxiosResponse} from "axios"

interface HttpRequestInterceptors {
    requestInterceptors: (config: AxiosRequestConfig) => void
    requestInterceptorsCatch: (config: any) => void
    responseInterceptors: (reponse: AxiosResponse) => AxiosResponse
    responseInterceptorsCatch: (config: any) => void
}

interface HttpRequestInterceptorConfig extends AxiosRequestConfig {
    interceptor: HttpRequestInterceptors
}