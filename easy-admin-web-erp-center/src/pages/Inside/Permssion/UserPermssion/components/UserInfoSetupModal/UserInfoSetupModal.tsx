import React, {useEffect, useState} from 'react';
import {Drawer, FormProps} from "antd"
import EasyFormRender, {FormRenderOpt} from "@/components/EasyFormRender/EasyFormRender";
import type {DrawerProps} from "antd/lib/drawer";
import EasyButtonGroup, {ButtonGroupItemProps} from "@/components/EasyButtonGroup/EasyButtonGroup";
import services from "@/services/services";

export type UserInfoSetupModalProps = {
    onClose:() => void
} & DrawerProps

type Props = UserInfoSetupModalProps;

const UserInfoSetupModal: React.FC<Props> = (props) => {
    const onFinish = () => {
        console.log('onFinish')
    }

    const [roles, setRoles] = useState<any[]>([]);

    const getRoles = async () => {
        const {data} = await services.getRoles()
        setRoles([...data.map((item) => ({...item,value:item.id}))])
    }

    useEffect(() => {
        getRoles()
    }, []);


    // 表单配置
    const userInfoRenderConfig:FormRenderOpt[] = [
        {
            compProp:{
                placeholder:"请输入用户名"
            },
            type:"input",
            formItem:{
                label:"用户名",
                name:"name",
                rules:[{required:true}],
            }
        },
        {
            compProp:{
                placeholder:"请输入密码",
            },
            type:"input",
            formItem:{
                label:"密码",
                name:"password",
                rules:[{required:true}],
            }
        },
        {
            compProp:{
                placeholder:"请输入手机号",
            },
            type:"input",
            formItem:{
                label:"手机号",
                name:"phone",
                rules:[{required:true}],
            }
        },
        {
            compProp:{
                placeholder:"请设置角色",
                options:roles
            },
            type:"select",
            formItem:{
                label:"角色",
                name:"roles",
                rules:[{required:true}],
            }
        },
        {
            compProp:{
                placeholder:"请输入邮箱",
            },
            type:"input",
            formItem:{
                label:"邮箱",
                name:"email",
            }
        },
        {
            compProp:{
                placeholder:"请输入用户昵称",
            },
            type:"input",
            formItem:{
                label:"昵称",
                name:"nikeName",
            }
        },
    ]

    const userInfoRenderFormConfig: FormProps<any> = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 },
    }

    const buttonGroupConfig: ButtonGroupItemProps[] = [
        {
            type:"default",
            text:"取消",
            key:"cancel"
        },
        {
            type:"primary",
            text:"提交",
            key:"commit"
        }
    ]

    const buttonCallBack = (item:ButtonGroupItemProps) => {
        console.log(item)
        if(item.key === "cancel") {
            props.onClose()
        }
    }

    return (
          <Drawer {...props} footer={<EasyButtonGroup layoutConfig={{gutter:16,justify:'center'}} opt={buttonGroupConfig} onClick={buttonCallBack}></EasyButtonGroup>}>
              <EasyFormRender config={userInfoRenderFormConfig} opt={userInfoRenderConfig} ></EasyFormRender>
          </Drawer>
      );
};

export default UserInfoSetupModal;