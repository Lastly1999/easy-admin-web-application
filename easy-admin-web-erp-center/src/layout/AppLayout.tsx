import React, { useState } from 'react';
// types
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from "antd"
// style
import "./AppLayout.less"
import RouterMap from '@/router/RouterMap/RouterMap';
// components
import AppMenu from './components/AppMenu/AppMenu';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface OwnProps {
}

type Props = OwnProps;

const AppLayout: React.FC<Props> = (props) => {

	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} width={220} onCollapse={value => setCollapsed(value)}>
				<div className="logo" />
				<AppMenu></AppMenu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-header" style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div className="site-layout-content-background" style={{ padding: 24, minHeight: 360 }}>
						<RouterMap></RouterMap>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
