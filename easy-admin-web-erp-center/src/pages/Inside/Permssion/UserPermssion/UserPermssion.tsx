import React, { useEffect, useState } from 'react'
import { Row, Col, Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup"
import "./UserPermssion.less"
import services from "@/services/services"
import UserInfoSetupModal from "@/pages/Inside/Permssion/UserPermssion/components/UserInfoSetupModal/UserInfoSetupModal";
import EasyTreeDep from "@/components/EasyTreeDep/EasyTreeDep"

type Props = {}

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

const UserPermssion: React.FC<Props> = (props) => {

	useEffect(() => {
		getUsers()
	}, []);

	const getUsers = async () => {
		const { data } = await services.getUsers()
		console.log(data)
		setData([...data])
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
			render: (_, record: any) => (
				<Space size="middle">
					<a>编辑</a>
				</Space>
			),
		},
	];

	const [data, setData] = useState<DataType[]>([]);

	const buttonGroupOpts: ButtonGroupItemProps[] = [
		{
			type: "primary",
			text: "创建",
			key: 'create'
		}
	]

	const buttonGroupClick = (item: ButtonGroupItemProps) => {
		if (item.key === "create") {
			setUserInfoSetupModalTitle("创建系统用户")
			setUserInfoSetupModalVisible(true)
		}
	}

	const [userInfoSetupModalVisible, setUserInfoSetupModalVisible] = useState<boolean>(false);

	const [userInfoSetupModalTitle, setUserInfoSetupModalTitle] = useState<string>();

	const userInfoSetupModalCancel = () => {
		setUserInfoSetupModalVisible(false)
	}

	const treeSelect = (selectedKeys: any, info: any) => {
		console.log(selectedKeys)
		console.log(info)
	}

	return (
		<div className='user-permssion-container'>
			<Row gutter={16}>
				<Col className="user-permssion-dep-tree" span={5}>
					<EasyTreeDep onSelect={treeSelect} />
				</Col>
				<Col span={19}>
					<EasyButtonGroup opt={buttonGroupOpts} onClick={buttonGroupClick} />
					<Table size="middle" bordered columns={columns} dataSource={data} />
					<UserInfoSetupModal forceRender width={600} title={userInfoSetupModalTitle} visible={userInfoSetupModalVisible} onClose={userInfoSetupModalCancel} />
				</Col>
			</Row>
		</div>
	)
}

export default UserPermssion