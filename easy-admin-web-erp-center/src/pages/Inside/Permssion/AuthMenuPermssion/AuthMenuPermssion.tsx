import React, { useEffect, useState } from 'react'
import { MenusItemInfo } from '@/services/Inside/menu/model/menuResponse'
import { Table, Tag } from "antd"
import { ColumnsType } from 'antd/lib/table'
import EasyContainer from "@/components/EasyContainer/EasyContainer"
import services from '@/services/services'
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup"
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import AuthMenuModifyModal from './components/AuthMenuModifyModal/AuthMenuModifyModal'

const MenuTypeEnum: { [index: number]: { name: string, color: string } } = {
	0: { name: '模块', color: "blue" },
	1: { name: '菜单', color: "green" },
	2: { name: '操作', color: "orange" },
}

type AuthMenuPermssionProps = {}

const AuthMenuPermssion: React.FC<AuthMenuPermssionProps> = (props) => {

	const [data, setData] = useState<MenusItemInfo[]>([])

	useEffect(() => {
		getAuthMenus()
	}, [])

	const getAuthMenus = async () => {
		const { data } = await services.getAuthMenus()
		setData([...data])
	}

	const [authMenuTableLoading, setAuthMenuTableLoading] = useState<boolean>(false)

	const rowButtonGroupConfig: ButtonGroupItemProps[] = [
		{
			type: "link",
			size: "small",
			text: "添加子菜单",
			icon: <PlusOutlined />,
			key: "edit"
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
			key: "edit",
			icon: <DeleteOutlined />
		},
	]

	const rowButtonHandler = (item: ButtonGroupItemProps) => {
		console.log(item)
	}

	const columns: ColumnsType<MenusItemInfo> = [
		{
			title: "菜单Id",
			dataIndex: "id",
		},
		{
			title: "父菜单id",
			dataIndex: "parentId",
			align: "center",
		},
		{
			title: "菜单名称",
			dataIndex: "name",
			align: "center",
		},
		{
			title: "菜单路由",
			dataIndex: "router",
			align: "center",
		},
		{
			title: "菜单类型",
			dataIndex: "type",
			key: "type",
			align: "center",
			render: (type: number) => {
				return <Tag color={MenuTypeEnum[type].color}>{MenuTypeEnum[type].name}</Tag>
			}
		},
		{
			title: "图标",
			dataIndex: "icon",
			align: "center",
		},
		{
			title: "排序",
			dataIndex: 'orderNum',
			align: "center",
		},
		{
			title: "是否显示",
			dataIndex: "isShow",
			key: "isShow",
			align: "center",
			render: (isShow) => (
				<Tag icon={isShow ? <CheckCircleOutlined /> : <CloseCircleOutlined />} color={isShow ? 'success' : 'error'} >
					启用
				</Tag >
			)
		},
		{
			title: "操作",
			dataIndex: "modify",
			align: "center",
			width: "350px",
			render: () => (
				<EasyButtonGroup opt={rowButtonGroupConfig} onClick={rowButtonHandler} layoutConfig={{ gutter: 16, justify: 'center' }} />
			)
		}
	]

	const toolButtonGroupConfig: ButtonGroupItemProps[] = [
		{
			type: "primary",
			text: "添加根菜单",
			icon: <PlusOutlined />,
			key: "addRoot"
		}
	]

	const toolHandler = (item: ButtonGroupItemProps) => {
		if (item.key === "addRoot") {
			setAuthMenuModifyModalTitle("添加根菜单")
			setAuthMenuModifyModalVisible(true)
		}
	}

	const authMenuModifyModalCancel = () => {
		setAuthMenuModifyModalVisible(false)
	}

	const [authMenuModifyModalVisible, setAuthMenuModifyModalVisible] = useState<boolean>(false)

	const [authMenuModifyModalTitle, setAuthMenuModifyModalTitle] = useState<string>()

	return (
		<EasyContainer>
			<>
				<EasyButtonGroup opt={toolButtonGroupConfig} onClick={toolHandler} layoutConfig={{ gutter: 16, }} />
				<Table size="middle" loading={authMenuTableLoading} columns={columns} dataSource={data} />
				<AuthMenuModifyModal visible={authMenuModifyModalVisible} title={authMenuModifyModalTitle} onCancel={authMenuModifyModalCancel} />
			</>
		</EasyContainer>
	)
}

export default AuthMenuPermssion