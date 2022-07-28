import React, { useState } from 'react';
// types
import { Col, MenuProps, Row, Button } from 'antd';
import { Layout } from "antd"
// style
import "./AppLayout.less"
import RouterMap from '@/router/RouterMap/RouterMap';
// components
import AppMenu from './components/AppMenu/AppMenu';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ThemeOption } from '@/festures/config/configSlice';
import { SettingOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface OwnProps {
}

type Props = OwnProps;

const AppLayout: React.FC<Props> = (props) => {

	const [collapsed, setCollapsed] = useState(false);

	const themeState = useSelector<RootState, ThemeOption>((state) => state.config.theme);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider className='site-layout-sider' theme={themeState} collapsible collapsed={collapsed} width={220} onCollapse={value => setCollapsed(value)}>
				<div className="logo">
					<img src="/src/assets/imgs/inside/logo-dark.png" />
				</div>
				<AppMenu></AppMenu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-header" style={{ padding: 0 }} />
				<Content>
					<div className='page-title-box'>
						<Row align="middle">
							<Col span={18}>
								<div className='page-title-box-name'>Dashboard</div>
								<div className='page-title-box-remark'>Welcome to Xoric Dashboard</div>
							</Col>
							<Col span={6}>
								<div style={{ textAlign: 'right' }}>
									<Button type="default" shape="round" icon={<SettingOutlined />}>更多选项</Button>
								</div>
							</Col>
						</Row>
					</div>
					<div className="site-layout-content-background" style={{ padding: 24, minHeight: 360 }}>
						<RouterMap></RouterMap>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
