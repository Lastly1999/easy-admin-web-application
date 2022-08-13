import React, { useEffect, useState } from 'react'
import { MenusItemInfo } from '@/services/Inside/menu/model/menuResponse'
import { Table, Tag,Modal } from "antd"
import { ColumnsType } from 'antd/lib/table'
import EasyContainer from "@/components/EasyContainer/EasyContainer"
import services from '@/services/services'
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup"
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import AuthMenuModifyModal from './components/AuthMenuModifyModal/AuthMenuModifyModal'
import {delMenu, putMenu, updateMenuInfo} from "@/services/Inside/menu/menu";
import {PutMenuInfo} from "@/services/Inside/menu/model/menuRequest";
import {openMessage} from "@/helps/antd/antd";
import {rowButtonGroupConfig,toolButtonGroupConfig} from "@/pages/Inside/Permssion/AuthMenuPermssion/config/render";

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
		const { data } = await services.getMenus()
		setData([...data])
	}

	const [authMenuTableLoading, setAuthMenuTableLoading] = useState<boolean>(false)

	const [modal, contextHolder] = Modal.useModal();

	const rowButtonHandler = (item: ButtonGroupItemProps,record:MenusItemInfo) => {
		if(item.key === "delete"){
			modal.confirm({
				title:"你确定要这样做吗？",
				content:"这样操作你的数据将会丢失",
				onOk:() => {
					delMenu(String(record.id)).then(async () => {
						getAuthMenus()
						openMessage({type:"success",content:"删除成功！"})
					})
				}
			})
		}else if(item.key === "addChild"){
			setRowParentId(Number(record.id))
			setAuthMenuModifyModalTitle("添加子菜单")
			setAuthMenuModifyModalVisible(true)
		}else if(item.key === "edit"){
			setAuthMenuModifyModalTitle("编辑菜单")
			setAuthMenuModifyModalMenuId(String(record.id))
			setAuthMenuModifyModalVisible(true)
		}
	}

	const columns: ColumnsType<MenusItemInfo> = [
		{
			title: "菜单Id",
			dataIndex: "id",
			key:"id"
		},
		{
			title: "父菜单id",
			dataIndex: "parentId",
			key:"parentId",
			align: "center",
		},
		{
			title: "菜单名称",
			dataIndex: "name",
			key:"name",
			align: "center",
		},
		{
			title: "菜单路由",
			dataIndex: "router",
			key:"router",
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
			key:"icon",
			align: "center",
		},
		{
			title: "排序",
			dataIndex: 'orderNum',
			key:"orderNum",
			align: "center",
		},
		{
			title: "是否显示",
			dataIndex: "isShow",
			key: "isShow",
			align: "center",
			render: (isShow) => (
				<Tag icon={isShow ? <CheckCircleOutlined /> : <CloseCircleOutlined />} color={isShow ? 'success' : 'error'} >
					{isShow ? '启用':'禁用'}
				</Tag >
			)
		},
		{
			title: "操作",
			dataIndex: "modify",
			align: "center",
			width: "350px",
			render: (_,record) => (
				<EasyButtonGroup opt={rowButtonGroupConfig} onClick={(val) => rowButtonHandler(val,record)} layoutConfig={{ gutter: 16, justify: 'center' }} />
			)
		}
	]

	// 待添加的列表父级id
	const [rowParentId, setRowParentId] = useState<number>();

	const toolHandler = (item: ButtonGroupItemProps) => {
		if (item.key === "addRoot") {
			setAuthMenuModifyModalTitle("添加根菜单")
			setAuthMenuModifyModalVisible(true)
		}
	}

	const authMenuModifyModalCancel = () => {
		setAuthMenuModifyModalVisible(false)
	}

	const authMenuModalClose = () => {
		setAuthMenuModifyModalMenuId(void 0)
		setRowParentId(void 0);
	}

	const [authMenuModifyModalVisible, setAuthMenuModifyModalVisible] = useState<boolean>(false)

	const [authMenuModifyModalTitle, setAuthMenuModifyModalTitle] = useState<string>()

	const [authMenuModifyModalMenuId, setAuthMenuModifyModalMenuId] = useState<string>();

	const authMenuModifyConfirm = (form:PutMenuInfo) => {
		const requestMethod = authMenuModifyModalMenuId ? updateMenuInfo : putMenu
		requestMethod({menuPid:rowParentId,...form},String(authMenuModifyModalMenuId))
			.then(() => {
				openMessage({type:"success",content:"新增系统菜单成功！"})
			})
			.finally(() => {
				setAuthMenuModifyModalVisible(false)
				getAuthMenus()
			})
	}

	return (
		<EasyContainer>
			<>
				<EasyButtonGroup opt={toolButtonGroupConfig} onClick={toolHandler} layoutConfig={{ gutter: 16, }} />
				<Table size="middle" rowKey={record => record.id} loading={authMenuTableLoading} columns={columns} dataSource={data} />
				<AuthMenuModifyModal  width={700} visible={authMenuModifyModalVisible} menuId={authMenuModifyModalMenuId} title={authMenuModifyModalTitle} afterClose={authMenuModalClose} onCancel={authMenuModifyModalCancel} onConfirm={authMenuModifyConfirm}/>
				{contextHolder}
			</>
		</EasyContainer>
	)
}

export default AuthMenuPermssion