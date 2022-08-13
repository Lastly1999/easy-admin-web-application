import React, {useState} from 'react'
import EasyContainer from "@/components/EasyContainer/EasyContainer";
import useCustomTable from "@/hooks/useCustomTable";
import services from "@/services/services";
import {Table} from "antd";
import {ColumnsType} from "antd/lib/table";
import {GetRolesItem} from "@/services/Inside/role/model/roleResponse";
import {Pager} from "@/services/model/commonRequest";
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup";
import {columnsButtoGroupConfig,toolButtonGroupConfig} from "@/pages/Inside/Permssion/RolePermssion/config/render";
import RoleModifyModal from "@/pages/Inside/Permssion/RolePermssion/components/RoleModifyModal/RoleModifyModal";
import {PutRoleForm} from "@/services/Inside/role/model/roleRequest";
import {openMessage} from "@/helps/antd/antd";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store";
import {AuthState} from "@/festures/auth/authSlice";

type Props = {}

const RolePermssion: React.FC<Props> = (props) => {

	const {dataSource,tableLoading,serachData} = useCustomTable<GetRolesItem,Pager>({initailParams:{pageSize:10,pageNo:1},api:services.getRoles})

	const authStore = useSelector<RootState,AuthState>((state) => state.auth)

	const columnsButtoGroupHander = (item:ButtonGroupItemProps,record:GetRolesItem) => {
		if(item.key === "edit"){
			setRoleModifyTitle("编辑角色信息")
			setRoleModifyRoleId(record.id)
			setRoleModifyVisible(true)
		}
	}

	const columns:ColumnsType<GetRolesItem> = [
		{
			title:"#",
			dataIndex:"id",
			width:"70px",
			render:(id,record,index) => (index + 1)
		},
		{
			title:"角色名称",
			dataIndex:"label"
		},
		{
			title:"标识",
			dataIndex:"name"
		},
		{
			title:"备注",
			dataIndex:"remark"
		},
		{
			title:"更新时间",
			dataIndex:"updatedAt"
		},
		{
			title:"创建时间",
			dataIndex:"createdAt"
		},
		{
			title:"操作",
			dataIndex:"modify",
			align:"center",
			width:"200px",
			render:(modify,record,index) => (
				<EasyButtonGroup opt={columnsButtoGroupConfig} onClick={(item) => columnsButtoGroupHander(item,record)} layoutConfig={{ gutter: 16,justify: 'center' }} />
			)
		}
	]

	const toolHandler = (item:ButtonGroupItemProps) => {
		if(item.key === "create"){
			setRoleModifyTitle("添加角色")
			setRoleModifyVisible(true)
		}
	}

	const [roleModifyVisible, setRoleModifyVisible] = useState<boolean>(false);

	const [roleModifyTitle, setRoleModifyTitle] = useState<string>();

	const roleModifyCancel = () => {
		setRoleModifyVisible(false)
	}

	const roleModifyConfirm = async (values:PutRoleForm) => {
		const params = {...values,userId:authStore.userInfo?.id}
		services.putRole(params).then(() => {
			openMessage({type:"success",content:"新增角色成功！"})
		}).finally(() => {
			setRoleModifyVisible(false)
			serachData({pageSize:10,pageNo:1})
		})
	}

	const [roleModifyRoleId, setRoleModifyRoleId] = useState<number>();

	const roleModifyModalClose = () => {
		setRoleModifyRoleId(void 0)
	}

	return (
		<EasyContainer>
			<>
				<EasyButtonGroup opt={toolButtonGroupConfig} onClick={toolHandler} layoutConfig={{ gutter: 16, }} />
				<Table size='middle' columns={columns} dataSource={dataSource} loading={tableLoading}/>
				<RoleModifyModal width={800} afterClose={roleModifyModalClose} roleId={roleModifyRoleId} title={roleModifyTitle} visible={roleModifyVisible} onCancel={roleModifyCancel} onConfirm={roleModifyConfirm}/>
			</>
		</EasyContainer>
	)
}

export default RolePermssion