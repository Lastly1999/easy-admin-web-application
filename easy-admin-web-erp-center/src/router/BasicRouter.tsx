import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// page components
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
                {/* micros app 授权中心 */}
                <Route path="/authorization" element={<div id="authorization"></div>}></Route>
                {/* micros app 业务中心 */}
                <Route path="/business" element={<div id="business"></div>}></Route>
                {/* micros main app 主应用路由器 */}
                <Route path="/admin/*" element={<AppLayout />}></Route>
            </Routes>
        </Router>
    )
}

export default BasicRouter