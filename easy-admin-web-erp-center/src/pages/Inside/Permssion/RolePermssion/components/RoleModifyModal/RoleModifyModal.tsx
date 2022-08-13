import React, {useEffect} from "react";
import {FormInstance, FormProps, Modal, ModalProps} from "antd";
import EasyFormRender, {FormRenderOpt} from "@/components/EasyFormRender/EasyFormRender";
import {useForm} from "antd/es/form/Form";
import useSystemAuthMenu from "@/hooks/useSystemAuthMenu";
import {TreeSelect} from "antd"
import {PutRoleForm} from "@/services/Inside/role/model/roleRequest";
import useDepartmentData from "@/hooks/useDepartmentData";
import services from "@/services/services";

type RoleModifyModalProps = {
    onConfirm:(form:PutRoleForm) => void;
    roleId?:number;
} & ModalProps

const RoleModifyModal:React.FC<RoleModifyModalProps> = (props) => {

    const {sysMenus} = useSystemAuthMenu(true)

    const {deps} = useDepartmentData(true)

    useEffect(() => {
        if(!props.visible) {
            form.resetFields()
        }else{
            if(props.roleId){
                getRoleInfo(String(props.roleId))
            }
        }
    },[props.visible])

    const formRenderConfig:FormRenderOpt[] = [
        {
            type:"input",
            formItem:{
                name:"roleName",
                label:"角色名称",
                rules:[{required:true,message:"请输入角色名称"}]
            },
            compProp:{
                placeholder:"请输入"
            }
        },
        {
            type:"input",
            formItem:{
                name:"name",
                label:"标识",
                rules:[{required:true,message:"请输入备注"}]
            },
            compProp:{
                placeholder:"请输入"
            }
        },
        {
            type:"input",
            formItem:{
                name:"roleRemark",
                label:"备注",
                rules:[{required:true,message:"请输入备注"}]
            },
            compProp:{
                placeholder:"请输入"
            }
        },
        {
            type:"treeSelect",
            formItem:{
                name:"roleMenuIds",
                label:"权限菜单",
                rules:[{required:true,message:"请选择"}]
            },
            compProp:{
                fieldNames:{
                    label:"name",
                    value:"id"
                },
                treeDefaultExpandAll:true,
                treeCheckable: true,
                showCheckedStrategy: TreeSelect.SHOW_ALL,
                treeData:sysMenus,
                placeholder:"请选择"
            }
        },
        {
            type:"treeSelect",
            formItem:{
                name:"roleDepIds",
                label:"部门权限",
                rules:[{required:true,message:"请选择"}]
            },
            compProp:{
                fieldNames:{
                    label:"name",
                    value:"id"
                },
                multiple:true,
                treeDefaultExpandAll:true,
                treeCheckable: true,
                showCheckedStrategy: TreeSelect.SHOW_ALL,
                treeData:deps,
                placeholder:"请选择"
            }
        }
    ]

    const [form] =  useForm<PutRoleForm>()

    const formConfig:FormProps<PutRoleForm> = {
        form,
        labelCol:{
            span:3
        },
        wrapperCol:{
            span:21
        }
    }

    const confirm = () => {
        form.validateFields().then((values) => {
            if(props.onConfirm) props.onConfirm(values)
        })
    }

    const getRoleInfo = async (roleId:string) => {
        const {data} = await services.getRoleInfo(roleId)
        form.setFieldsValue({
            roleName:data.roleName,
            name:data.name,
            userId:Number(data.userId),
            roleRemark:data.roleRemark,
            roleMenuIds:data.roleMenuIds,
            roleDepIds:data.roleDepIds
        })
    }

    return (
        <Modal {...props} onOk={confirm}>
            <EasyFormRender config={formConfig} opt={formRenderConfig}/>
        </Modal>
    )
}

export default RoleModifyModal