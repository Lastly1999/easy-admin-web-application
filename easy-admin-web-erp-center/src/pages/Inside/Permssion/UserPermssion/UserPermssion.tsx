import React, {useEffect, useState} from 'react'
import { Button, Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import EasyButtonGroup, {ButtonGroupItemProps} from "@/components/EasyButtonGroup/EasyButtonGroup"
import "./UserPermssion.less"
import services from "@/services/services"
import UserInfoSetupModal from "@/pages/Inside/Permssion/UserPermssion/components/UserInfoSetupModal/UserInfoSetupModal";

type Props = {}

interface DataType {
	createdAt: string
	departmentId: number
	email: string
	headImg: string
	id: number
	name: string
	nickName: string
	password: string
	phone: string
	remark: string | null
	status: number
	updatedAt: string
	username: string
}

const UserPermssion: React.FC<Props> = (props) => {

	useEffect(() => {
		getUsers()
	}, []);

	const getUsers = async () => {
		const {data} = await services.getUsers()
		console.log(data)
		setData([...data])
	}

	const columns: ColumnsType<DataType> = [
		{
			title:"序号",
			dataIndex:"id",
			key:"id"
		},
		{
			title: '用户名',
			dataIndex: 'username',
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
			title: '操作',
			key: 'action',
			align:"center",
			render: (_, record: any) => (
				<Space size="middle">
					<a>编辑</a>
				</Space>
			),
		},
	];

	const [data, setData] = useState<DataType[]>([]);

	const buttonGroupOpts:ButtonGroupItemProps[] = [
		{
			type:"primary",
			text:"创建",
			key:'create'
		}
	]

	const buttonGroupClick = (item:ButtonGroupItemProps) => {
		if(item.key === "create"){
			setUserInfoSetupModalTitle("创建系统用户")
			setUserInfoSetupModalVisible(true)
		}
	}

	const [userInfoSetupModalVisible, setUserInfoSetupModalVisible] = useState<boolean>(false);

	const [userInfoSetupModalTitle, setUserInfoSetupModalTitle] = useState<string>();

	const userInfoSetupModalCancel = () => {
		setUserInfoSetupModalVisible(false)
	}

	return (
		<div className='user-permssion-container'>
			<EasyButtonGroup opt={buttonGroupOpts} onClick={buttonGroupClick}/>
			<Table size="middle" bordered columns={columns} dataSource={data} />
			<UserInfoSetupModal destroyOnClose width={600} title={userInfoSetupModalTitle} visible={userInfoSetupModalVisible} onClose={userInfoSetupModalCancel}/>
		</div>
	)
}

export default UserPermssion