import React, { useState, useLayoutEffect } from 'react';
import { Route, Routes } from "react-router-dom";
// types
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from "antd"
// style
import "./AppLayout.less"
// apis
import { getAsyncAuthMenus } from "@/redux/festures/auth/authAsyncThunk";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { AuthState } from '@/redux/festures/auth/authSlice';
import RouterMap from '@/router/RouterMap/RouterMap';
// components
import AppMenu from './components/AppMenu/AppMenu';
import action from '@/micros/action';


const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface OwnProps {
}

type Props = OwnProps;

const AppLayout: React.FC<Props> = (props) => {

	const [collapsed, setCollapsed] = useState(false);

	const dispatch = useDispatch()

	const authState = useSelector<RootState, AuthState>((state) => state.authState)

	useLayoutEffect(() => {
		// dispatch(getAsyncAuthMenus() as any)
	}, [])

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
