import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const RoleManagement = React.lazy(() => import('@/pages/Inside/RoleManagement/RoleManagement'))
const SystemSettings = React.lazy(() => import('@/pages/Inside/SystemSettings/SystemSettings'))
const UserManagement = React.lazy(() => import('@/pages/Inside/UserManagement/UserManagement'))
const Workbench = React.lazy(() => import('@/pages/Inside/Workbench/Workbench'))

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