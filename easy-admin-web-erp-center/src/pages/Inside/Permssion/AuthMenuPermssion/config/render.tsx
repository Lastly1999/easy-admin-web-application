import {ButtonGroupItemProps} from "@/components/EasyButtonGroup/EasyButtonGroup";
import {DeleteOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import React from "react";

export const rowButtonGroupConfig: ButtonGroupItemProps[] = [
    {
        type: "link",
        size: "small",
        text: "添加子菜单",
        icon: <PlusOutlined />,
        key: "addChild"
    },
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

export const toolButtonGroupConfig: ButtonGroupItemProps[] = [
    {
        type: "primary",
        text: "添加根菜单",
        icon: <PlusOutlined />,
        key: "addRoot"
    }
]