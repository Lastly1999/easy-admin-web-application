import {ButtonGroupItemProps} from "@/components/EasyButtonGroup/EasyButtonGroup";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import React from "react";

/**
 * 行操作按钮组配置
 */
export const columnsButtoGroupConfig:ButtonGroupItemProps[] = [
    {
        type: "link",
        size: "small",
        text: "编辑",
        key: "edit",
        icon: <EditOutlined />
    },
    {
        type: "link",
        size: "small",
        text: "删除",
        key: "delete",
        icon: <DeleteOutlined />
    },
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