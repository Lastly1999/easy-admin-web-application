import React, { useEffect } from 'react'
import SubMenu from 'antd/lib/menu/SubMenu'
import * as Icon from "@ant-design/icons"
import { Menu } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthMenusThunk } from "@/festures/auth/authSlice"
import { RootState } from '@/app/store'
import { ThemeOption } from '@/festures/config/configSlice'
import { useLocation, useNavigate } from "react-router-dom"

export interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export type IAppMenuProps = {}

const AppMenu: React.FC<IAppMenuProps> = (props) => {

	const dispatch = useDispatch()

	const menusState = useSelector<RootState, []>((state) => state.auth.menus)

	const themeState = useSelector<RootState, ThemeOption>((state) => state.config.theme)

	const location = useLocation()

	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getAuthMenusThunk() as any)
	}, [])

	const menuClick = (event: MenuInfo) => {
		navigate(event.key)
	}

	const generateMenu = (menu: any[]) => {
		return menu.map((item: any) => {
			if (item.children) {
				return (
					<SubMenu key={item.router} title={
						<>
							{item.icon ? React.createElement((Icon as any)[item.icon]) : null}
							<span>{item.name}</span>
						</>
					}>
						{generateMenu(item.children)}
					</SubMenu>
				)
			}
			return <Menu.Item key={item.router}>
				{
					item.icon ? React.createElement((Icon as any)[item.icon]) : null
				}
				<span>{item.name}</span>
			</Menu.Item>
		})
	}

	const staticMenu = [
		{
			name: "工作台",
			router: "/admin/workBench",
		}
	]


	return (
		<Menu theme={themeState} defaultSelectedKeys={[location.pathname]} mode="inline" onClick={menuClick}>
			{generateMenu([...staticMenu, ...menusState])}
		</Menu>
	)
}

export default AppMenu