import React, {FunctionComponent, useState} from 'react';
import {Route, Routes} from "react-router-dom";
// types
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu} from "antd"
// icons
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
// style
import "./AdminRouter.less"
// pages
import Workbench from "@/pages/Inside/Workbench/Workbench";
import RoleManagement from "@/pages/Inside/RoleManagement/RoleManagement";
import UserManagement from "@/pages/Inside/UserManagement/UserManagement";
import SystemSettings from "@/pages/Inside/SystemSettings/SystemSettings";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface OwnProps {
}

type Props = OwnProps;

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined/>),
    getItem('Option 2', '2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];

const AdminRouter: FunctionComponent<Props> = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} width={220} onCollapse={value => setCollapsed(value)}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" items={items}/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-header" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content-background" style={{padding: 24, minHeight: 360}}>
                        <Routes>
                            <Route path="/workbench" element={<Workbench/>}></Route>
                            <Route path="/roleManagement" element={<RoleManagement/>}></Route>
                            <Route path="/userManagement" element={<UserManagement/>}></Route>
                            <Route path="/systemSettings" element={<SystemSettings/>}></Route>
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminRouter;
