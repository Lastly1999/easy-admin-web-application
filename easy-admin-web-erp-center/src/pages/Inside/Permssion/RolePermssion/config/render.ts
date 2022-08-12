import {ButtonGroupItemProps} from "@/components/EasyButtonGroup/EasyButtonGroup";

/**
 * 行操作按钮组配置
 */
export const columnsButtoGroupConfig:ButtonGroupItemProps[] = [
    {
        type:"link",
        text:"创建",
        key:"create"
    },
    {
        type:"link",
        text:"删除",
        key:"delete"
    }
]

/**
 * 工具栏操作按钮组配置
 */
export const toolButtonGroupConfig: ButtonGroupItemProps[] = [
    {
        type:"primary",
        text:"创建",
        key:"create"
    }
]