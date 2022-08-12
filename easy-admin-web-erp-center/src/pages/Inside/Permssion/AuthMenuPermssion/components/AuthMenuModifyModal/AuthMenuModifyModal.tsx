import React, { useEffect } from 'react'
import { FormProps, Modal, ModalProps, Form } from "antd"
import EasyFormRender, { FormRenderOpt } from "@/components/EasyFormRender/EasyFormRender"
import {antDesignIcons} from "@/components/EasyIconSelect/EasyIconSelect";
import EasyIcon from "@/components/EasyIcon/EasyIcon";
import {PutMenuInfo} from "@/services/Inside/menu/model/menuRequest";
import services from "@/services/services";

type AuthMenuModifyModalProps = {
	menuId?:string;
	onConfirm:(form:PutMenuInfo) => void
} & ModalProps

const AuthMenuModifyModal: React.FC<AuthMenuModifyModalProps> = (props) => {

	useEffect(() => {
		if (!props.visible) {
			form.resetFields()
		}else{
			if(props.menuId){
				getAuthMenuInfo(props.menuId)
			}
		}
	}, [props.visible])

	const formRenderConfig: FormRenderOpt[] = [
		{
			type: "input",
			formItem: {
				label: "菜单名称",
				name: "menuName",
				rules: [{ required: true, message: "请输入" }]
			},
			compProp: {
				placeholder: "请输入"
			}
		},
		{
			type: "input",
			formItem: {
				label: "菜单路由",
				name: "menuRouter",
				rules: [{ required: true, message: "请输入" }]
			},
			compProp: {
				placeholder: "请输入"
			}
		},
		{
			type: "select",
			formItem: {
				label: "菜单类型",
				name: "menuType",
				rules: [{ required: true, message: "请选择" }]
			},
			compProp: {
				placeholder: "请选择",
				options: [
					{
						label: "模块",
						value: 0
					},
					{
						label: "菜单",
						value: 1
					},
					{
						label: "操作",
						value: 2
					}
				]
			}
		},
		{
			type: "select",
			formItem: {
				label: "菜单图标",
				name: "menuIcon",
				rules: [{ required: true, message: "请选择" }]
			},
			compProp: {
				options:antDesignIcons.map((item) => ({
					label:(<div>
						<EasyIcon icon={item}/>
						<span style={{marginLeft:'3px'}}>
							{item}
						</span></div>),
					value:item
				})),
				placeholder: "请选择",
			}
		},
		{
			type: "input",
			formItem: {
				label: "排序",
				name: "menuOrderNum",
				initialValue: 0
			},
			compProp: {
				placeholder: "请选择"
			}
		},
		{
			type:"switch",
			formItem:{
				label:"是否启用",
				name:"menuIsShow",
				valuePropName:"checked"
			},
			compProp:{
				unCheckedChildren:"关闭",
				checkedChildren:"开启"
			}
		}
	]

	const [form] = Form.useForm<PutMenuInfo>()

	const formConfig: FormProps<PutMenuInfo> = {
		form,
		labelCol: { span: 4 },
		wrapperCol: { span: 20 }
	}

	const modifyConfirm = () => {
		form.validateFields().then((res) => {
			if(props.onConfirm)props.onConfirm(res)
		})
	}

	const getAuthMenuInfo = async (menuId:string) => {
		const {data} = await services.getMenuInfo(menuId)
		form.setFieldsValue({
			menuName:data.name,
			menuPid:data.parentId,
			menuType:data.type,
			menuIcon:data.icon,
			menuIsShow:data.isShow,
			menuRouter:data.router,
			menuPerms:data.perms,
			menuOrderNum:data.orderNum
		})
	}

	return (
		<Modal maskClosable={false} destroyOnClose forceRender onOk={modifyConfirm} {...props}>
			<EasyFormRender opt={formRenderConfig} config={formConfig}></EasyFormRender>
		</Modal>
	)
}

export default AuthMenuModifyModal