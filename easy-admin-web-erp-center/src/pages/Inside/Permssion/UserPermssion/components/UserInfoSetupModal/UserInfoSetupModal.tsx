import React, { useEffect, useState } from 'react';
import { Drawer, FormProps, Form } from "antd"
import EasyFormRender, { FormRenderOpt } from "@/components/EasyFormRender/EasyFormRender";
import type { DrawerProps } from "antd/lib/drawer";
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup";
import services from "@/services/services";
import useDepartmentData from '@/hooks/useDepartmentData';
import useRoleData from '@/hooks/useRoleData';

export type UserInfoForm = {
    userName: string
    name: string
    email: string
    depId: number
    roles: number[]
    nikeName: string
}

export type UserInfoSetupModalProps = {
    onClose: () => void
    onSuccess: () => void
    userId?: number
} & DrawerProps

type Props = UserInfoSetupModalProps;

const UserInfoSetupModal: React.FC<Props> = (props) => {

    const onFinish = () => {
        setButtonGroupLoading(true)
        form.validateFields().then(async (res: UserInfoForm) => {
            const putOrEdit = props.userId ? services.updateUser : services.putUser
            const { statusCode } = await putOrEdit(res, String(props.userId))
            if (statusCode === 200) props.onSuccess()
        }).finally(() => {
            setButtonGroupLoading(false)
        })
    }

    const { roles, getRoles } = useRoleData()

    const { deps, getDeps } = useDepartmentData()

    useEffect(() => {
        if (!props.visible) {
            form.resetFields()
        } else {
            getRoles()
            getDeps()
            if (props.userId) getUserInfo(props.userId)
        }
    }, [props.visible, props.userId])

    const getUserInfo = async (userId: number) => {
        const { data } = await services.getUserById(userId)
        form.setFieldsValue({ ...data })
    }

    // 表单配置
    const userInfoRenderConfig: FormRenderOpt[] = [
        {
            compProp: {
                placeholder: "请输入用户名"
            },
            type: "input",
            formItem: {
                label: "用户名",
                name: "userName",
                rules: [{ required: true }],
            }
        },
        {
            compProp: {
                placeholder: "请输入姓名"
            },
            type: "input",
            formItem: {
                label: "姓名",
                name: "name",
                rules: [{ required: true }],
            }
        },
        {
            compProp: {
                placeholder: "请输入手机号",
            },
            type: "input",
            formItem: {
                label: "手机号",
                name: "phone",
                rules: [{ required: true }],
            }
        },
        {
            compProp: {
                placeholder: "请设置角色",
                options: roles,
                mode: "multiple",
                fieldNames: {
                    label: "label",
                    value: "id"
                }
            },
            type: "select",
            formItem: {
                label: "角色",
                name: "roles",
                rules: [{ required: true }],
            }
        },
        {
            compProp: {
                placeholder: "请设置部门",
                fieldNames: {
                    label: "name",
                    value: "id"
                },
                treeData: deps
            },
            type: "treeSelect",
            formItem: {
                label: "部门",
                name: "depId",
                rules: [{ required: true }],
            }
        },
        {
            compProp: {
                placeholder: "请输入邮箱",
            },
            type: "input",
            formItem: {
                label: "邮箱",
                name: "email",
            }
        },
        {
            compProp: {
                placeholder: "请输入用户昵称",
            },
            type: "input",
            formItem: {
                label: "昵称",
                name: "nikeName",
            }
        },
    ]

    const [form] = Form.useForm<UserInfoForm>()

    const userInfoRenderFormConfig: FormProps<any> = {
        form,
        labelCol: { span: 3 },
        wrapperCol: { span: 21 },
    }

    const buttonGroupConfig: ButtonGroupItemProps[] = [
        {
            type: "default",
            text: "取消",
            key: "cancel"
        },
        {
            type: "primary",
            text: "提交",
            key: "commit"
        }
    ]

    const [buttonGroupLoading, setButtonGroupLoading] = useState<boolean>(false)

    const buttonCallBack = (item: ButtonGroupItemProps) => {
        if (item.key === "cancel") {
            props.onClose()
        } else if (item.key === "commit") {
            onFinish()
        }
    }

    return (
        <Drawer {...props} footer={<EasyButtonGroup layoutConfig={{ gutter: 16, justify: 'center' }} loading={buttonGroupLoading} opt={buttonGroupConfig} onClick={buttonCallBack}></EasyButtonGroup>}>
            <EasyFormRender config={userInfoRenderFormConfig} opt={userInfoRenderConfig} />
        </Drawer >
    );
};

export default UserInfoSetupModal;