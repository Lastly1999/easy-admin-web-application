import React, { useEffect } from 'react'
import { FormProps, Modal, ModalProps, Form } from "antd"
import EasyFormRender, { FormRenderOpt } from "@/components/EasyFormRender/EasyFormRender"
import { PutMenuInfo } from '@/services/Inside/menu/model/menuRequest'

type AuthMenuModifyModalProps = {} & ModalProps

const AuthMenuModifyModal: React.FC<AuthMenuModifyModalProps> = (props) => {

	useEffect(() => {
		if (!props.visible) {
			form.resetFields()
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
				placeholder: "请选择"
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
		}
	]

	const [form] = Form.useForm()

	const formConfig: FormProps<PutMenuInfo> = {
		form,
		labelCol: { span: 4 },
		wrapperCol: { span: 20 }
	}

	return (
		<Modal maskClosable={false} destroyOnClose forceRender {...props}>
			<EasyFormRender opt={formRenderConfig} config={formConfig}></EasyFormRender>
		</Modal>
	)
}

export default AuthMenuModifyModal