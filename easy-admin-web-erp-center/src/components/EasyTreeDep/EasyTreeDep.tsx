import React, { useEffect, useState } from 'react';
import { Tree, Tooltip, Dropdown, Menu, Popconfirm } from "antd"
import { PlusOutlined, UndoOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import TreeDepModifyModal from "@/components/EasyTreeDep/components/TreeDepModifyModal/TreeDepModifyModal";
import "./EasyTreeDep.less"
import services from '@/services/services';
import { MenuInfo } from '@/layout/components/AppMenu/AppMenu';
import { GetDepartmentRequest } from '@/services/Inside/department/model/request/departmentRequest';
import { openMessage } from '@/helps/antd/antd';

interface EasyTreeDepProps {
    onSelect: (selectedKeys: any, info: any) => void;
}

const EasyTreeDep: React.FC<EasyTreeDepProps> = () => {


    const [treeData, setTreeData] = useState<GetDepartmentRequest[]>([]);

    useEffect(() => {
        getDepartments()
    }, []);

    const getDepartments = async () => {
        const { data } = await services.getDepartments()
        setTreeData([...data])
    }

    const onExpand = () => { }

    const [treeDepModifyModalVisible, setTreeDepModifyModalVisible] = useState(false);

    const [treeDepModifyTitle, setTreeDepModifyTitle] = useState<string>();

    const showTreeDepModifyModal = () => {
        setTreeDepModifyTitle("新增部门")
        setTreeDepModifyModalVisible(true)
    }

    const cancelTreeDepModifyModal = () => {
        setTreeDepModifyModalVisible(false)
    }

    const treeDepModifyModalModifySuccess = () => {
        setTreeDepModifyModalVisible(false)
        getDepartments()
    }

    const treeMenuSelect = (info: MenuInfo, item: GetDepartmentRequest) => {
        if (info.key === "1") {
            setDepId(String(item.id))
            setTreeDepModifyTitle("修改部门")
            setTreeDepModifyModalVisible(true)
        } else if (info.key === "2") {
            delDepById(String(item.id))
        }
    }

    const delDepById = async (depId: string) => {
        const { statusCode } = await services.delDepartmentById(depId)
        if (statusCode === 200) {
            openMessage({
                type: 'success',
                content: "删除成功！"
            })
            getDepartments()
        }
    }

    const treeMenu = (item: GetDepartmentRequest) => {
        return (
            <Menu onClick={(info) => treeMenuSelect(info, item)}>
                <Menu.Item key="1" icon={<EditOutlined />}>编辑</Menu.Item>
                <Menu.Item key="2" icon={<DeleteOutlined />}> 删除 </Menu.Item>
            </Menu>
        )
    }

    const [depId, setDepId] = useState<string | undefined>()

    const resetDeps = () => {
        getDepartments().then(() => {
            openMessage({
                type: 'success',
                content: "刷新成功！"
            })
        })
    }

    return (
        <div className="easy-dep-tree">
            <div className="tree-tool">
                <span>系统部门树</span>
                <span className="tree-tool-icons">
                    <Tooltip title="添加">
                        <PlusOutlined onClick={showTreeDepModifyModal} />
                    </Tooltip>
                    <Tooltip title="刷新" >
                        <UndoOutlined onClick={resetDeps} />
                    </Tooltip>
                </span>
            </div>
            <Tree autoExpandParent titleRender={(item) => (<Dropdown overlay={() => treeMenu(item)} trigger={['contextMenu']}><span>{item.name}</span></Dropdown>)} onExpand={onExpand} treeData={treeData} />
            <TreeDepModifyModal depId={depId} title={treeDepModifyTitle} visible={treeDepModifyModalVisible} onSuccess={treeDepModifyModalModifySuccess} onCancel={cancelTreeDepModifyModal} />
        </div>
    )
}

export default EasyTreeDep;
