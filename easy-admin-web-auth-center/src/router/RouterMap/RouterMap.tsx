import React from 'react'
import { Route, Routes } from 'react-router-dom'

import RoleManagement from '@/pages/Inside/RoleManagement/RoleManagement'
import SystemSettings from '@/pages/Inside/SystemSettings/SystemSettings'
import UserManagement from '@/pages/Inside/UserManagement/UserManagement'
import Workbench from '@/pages/Inside/Workbench/Workbench'

type Props = {}

const RouterMap: React.FC = (props: Props) => {
	return (
		<Routes>
			<Route path="/workbench" element={<Workbench />}></Route>
			<Route path="/roleManagement" element={<RoleManagement />}></Route>
			<Route path="/userManagement" element={<UserManagement />}></Route>
			<Route path="/systemSettings" element={<SystemSettings />}></Route>
		</Routes>
	)
}

export default RouterMap