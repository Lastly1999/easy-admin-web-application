import React, { useEffect, useState } from 'react'
import { Row, Col, Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup"
import "./UserPermssion.less"
import services from "@/services/services"
import UserInfoSetupModal from "@/pages/Inside/Permssion/UserPermssion/components/UserInfoSetupModal/UserInfoSetupModal";
import EasyTreeDep from "@/components/EasyTreeDep/EasyTreeDep"
import { openMessage } from '@/helps/antd/antd'
import { DirectoryTreeProps } from 'antd/lib/tree/DirectoryTree'
import { GetDepartmentRequest } from '@/services/Inside/department/model/request/departmentRequest'
import { DataNode } from 'antd/lib/tree'
import EasyContainer from "@/components/EasyContainer/EasyContainer"

type UserPermssionProps = {}

interface DataType {
	userId: number;
	departmentId: number;
	name: string;
	userName: string;
	nickName: string;
	headImg: string;
	phone: string;
	remark: string;
	status: number;
	createdAt: Date;
	updatedAt: Date;
	roles: { roleId: number; roleName: string }[];
}

const UserPermssion: React.FC<UserPermssionProps> = (props) => {

	useEffect(() => {
		getUsers()
	}, []);

	const getUsers = async () => {
		setUserTableLoading(true)
		const { data } = await services.getUsers({ depId: treeSelectDefKey })
		setData([...data])
		setUserTableLoading(false)
	}

	const columns: ColumnsType<DataType> = [
		{
			title: "序号",
			dataIndex: "index",
			render: (text, item, index) => index + 1
		},
		{
			title: '用户名',
			dataIndex: 'userName',
			key: 'username',
		},
		{
			title: '手机号',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: '邮箱',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: "所在部门",
			dataIndex: "departmentName",
			key: 'departmentName',
			render: (text) => (<Tag color="success">{text}</Tag>)
		},
		{
			title: "角色",
			dataIndex: "roles",
			render: (_, item) => <>
				{item.roles.map((item) => <Tag color="success">{item.roleName}</Tag>)}
			</>
		},
		{
			title: '操作',
			key: 'action',
			align: "center",
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => userRowEdit(record.userId)}>编辑</a>
				</Space>
			),
		},
	];

	const [userTableLoading, setUserTableLoading] = useState<boolean>(false)

	const [data, setData] = useState<DataType[]>([]);

	const buttonGroupOpts: ButtonGroupItemProps[] = [
		{
			type: "primary",
			text: "创建",
			key: 'create'
		}
	]

	const [rowUserId, setRowUserId] = useState<number>()

	const userRowEdit = (userId: number) => {
		setRowUserId(userId)
		setUserInfoSetupModalTitle("编辑系统用户")
		setUserInfoSetupModalVisible(true)
	}

	const buttonGroupClick = (item: ButtonGroupItemProps) => {
		if (item.key === "create") {
			setRowUserId(undefined)
			setUserInfoSetupModalTitle("创建系统用户")
			setUserInfoSetupModalVisible(true)
		}
	}

	const [userInfoSetupModalVisible, setUserInfoSetupModalVisible] = useState<boolean>(false);

	const [userInfoSetupModalTitle, setUserInfoSetupModalTitle] = useState<string>();

	const userInfoSetupModalCancel = () => {
		setUserInfoSetupModalVisible(false)
	}

	const [treeSelectDefKey, setTreeSelectDefKey] = useState<number>()

	useEffect(() => {
		getUsers()
	}, [treeSelectDefKey])

	const treeSelect: DirectoryTreeProps<GetDepartmentRequest & DataNode>['onSelect'] = (selectedKeys, info) => {
		setTreeSelectDefKey(info.node.id)
	}

	const userInfoSetupModalSuccess = () => {
		openMessage({
			type: "success",
			content: "创建成功！"
		})
		setUserInfoSetupModalVisible(false)
		getUsers()
	}

	return (
		<EasyContainer>
			<Row gutter={16}>
				<Col className="user-permssion-dep-tree" span={5}>
					<EasyTreeDep onSelect={treeSelect} />
				</Col>
				<Col span={19}>
					<EasyButtonGroup opt={buttonGroupOpts} onClick={buttonGroupClick} />
					<Table size="middle" loading={userTableLoading} bordered columns={columns} dataSource={data} />
					<UserInfoSetupModal destroyOnClose forceRender width={600} userId={rowUserId} title={userInfoSetupModalTitle} visible={userInfoSetupModalVisible} onClose={userInfoSetupModalCancel} onSuccess={userInfoSetupModalSuccess} />
				</Col>
			</Row>
		</EasyContainer>
	)
}

export default UserPermssion