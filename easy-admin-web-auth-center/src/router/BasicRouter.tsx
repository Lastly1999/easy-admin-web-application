import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// page components
import Login from "@/pages/Inside/Login/Login"
import AppLayout from "@/layout/AppLayout";

/**
 * 系统路由配置
 * @author lastly1999
 * @description 系统路由的配置
 */
const BasicRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/admin/*" element={<AppLayout />}></Route>
            </Routes>
        </Router>
    )
}

export default BasicRouter