import { Rule } from "antd/lib/form"

export type IJsonResult<T> = {
    statusCode: number
    data: T
    message: string
    statusCode: number
    timestamp: string
    url: string
}

export type IFormRules = {
    [index: string]: Rule[] | undefined
}