import {Rule} from "antd/lib/form"

export type IJsonResult<T> = {
    code: number
    msg: string
    data: T
}

export type IFormRules = {
    [index: string]: Rule[] | undefined
}