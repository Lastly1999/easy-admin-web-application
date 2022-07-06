import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// page components
import Login from "@/pages/Inside/Login/Login"
import AdminRouter from "@/router/routerMap/AdminRouter/AdminRouter";

/**
 * 系统路由配置
 * @author lastly1999
 * @description 系统路由的配置
 */
export default function BasicRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/admin/*" element={<AdminRouter/>}></Route>
            </Routes>
        </Router>
    )
}