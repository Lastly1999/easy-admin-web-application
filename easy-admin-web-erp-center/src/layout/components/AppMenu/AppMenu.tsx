import React from 'react'
import SubMenu from 'antd/lib/menu/SubMenu'
import * as Icon from "@ant-design/icons"
import { Menu } from 'antd'

export type IAppMenuProps = {}

const AppMenu: React.FC<IAppMenuProps> = (props) => {

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
		<Menu mode="inline">
			{generateMenu([])}
		</Menu>
	)
}

export default AppMenu