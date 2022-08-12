import React from 'react'
import EasyContainer from "@/components/EasyContainer/EasyContainer";
import useCustomTable from "@/hooks/useCustomTable";
import services from "@/services/services";
import {Table} from "antd";
import {ColumnsType} from "antd/lib/table";
import {GetRolesItem} from "@/services/Inside/role/model/roleResponse";
import {Pager} from "@/services/model/commonRequest";
import EasyButtonGroup, { ButtonGroupItemProps } from "@/components/EasyButtonGroup/EasyButtonGroup";
import {columnsButtoGroupConfig,toolButtonGroupConfig} from "@/pages/Inside/Permssion/RolePermssion/config/render";

type Props = {}

const RolePermssion: React.FC<Props> = (props) => {

	const {dataSource,tableLoading} = useCustomTable<GetRolesItem,Pager>({initailParams:{pageSize:10,pageNo:1},api:services.getRoles})

	const columnsButtoGroupHander = (item:ButtonGroupItemProps) => {

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
			render:() => (
				<EasyButtonGroup opt={columnsButtoGroupConfig} onClick={columnsButtoGroupHander} layoutConfig={{ gutter: 16,justify: 'center' }} />
			)
		}
	]

	const toolHandler = (item:ButtonGroupItemProps) => {

	}

	return (
		<EasyContainer>
			<>
				<EasyButtonGroup opt={toolButtonGroupConfig} onClick={toolHandler} layoutConfig={{ gutter: 16, }} />
				<Table size='middle' columns={columns} dataSource={dataSource} loading={tableLoading}/>
			</>
		</EasyContainer>
	)
}

export default RolePermssion