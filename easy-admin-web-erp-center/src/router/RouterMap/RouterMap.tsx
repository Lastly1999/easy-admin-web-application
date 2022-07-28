import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserPermssion from "@/pages/Inside/Permssion/UserPermssion/UserPermssion"
import AuthMenuPermssion from "@/pages/Inside/Permssion/AuthMenuPermssion/AuthMenuPermssion"
import RolePermssion from "@/pages/Inside/Permssion/RolePermssion/RolePermssion"

type Props = {}

const RouterMap: React.FC = (props: Props) => {

	return (
		<Routes>
			<Route path="/permssion/user" element={<UserPermssion />}></Route>
			<Route path="/permssion/menu" element={<AuthMenuPermssion />}></Route>
			<Route path="/permssion/role" element={<RolePermssion />}></Route>
		</Routes>
	)
}

export default RouterMap