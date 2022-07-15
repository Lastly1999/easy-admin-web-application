import React from 'react'
import SubMenu from 'antd/lib/menu/SubMenu'
import * as Icon from "@ant-design/icons"
import { Menu } from 'antd'
import { useSelector } from 'react-redux'
import { ConfigState } from '@/redux/festures/config/configSlice'
import { RootState } from '@/redux'
import { AuthState } from '@/redux/festures/auth/authSlice'

export type IAppMenuProps = {}

const AppMenu: React.FC<IAppMenuProps> = (props) => {

	const configState = useSelector<RootState, ConfigState>((state) => state.configState)

	const authState = useSelector<RootState, AuthState>((state) => state.authState)

	const generateMenu = (menu: any[]) => {
		return menu.map((item: any) => {
			if (item.children) {
				return (
					<SubMenu key={item.id} title={
						<>
							{item.icon ? React.createElement((Icon as any)[item.icon]) : null}
							<span>{item.name}</span>
						</>
					}>
						{generateMenu(item.children)}
					</SubMenu>
				)
			}
			return <Menu.Item key={item.id}>
				{
					item.icon ? React.createElement((Icon as any)[item.icon]) : null
				}
				<span>{item.name}</span>
			</Menu.Item>
		})
	}

	return (
		<Menu theme={configState.theme} mode="inline">
			{generateMenu(authState.menus)}
		</Menu>
	)
}

export default AppMenu