import React, { useState } from "react"
import { Button, Checkbox, Form, Input, message } from "antd"
import "./login.less"
import { useNavigate } from "react-router-dom";
import { loginAction } from "@/services/Inside/auth/authService";
import { useDispatch } from "react-redux";
import { setInsideUserInfo, setToken } from "@/redux/festures/auth/authSlice";
import { AppDispatch } from "@/redux";

/**
 * 内部系统登录页
 * @author lastly1999
 * @date 2022年7月3日14:11:29
 */
const Login: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    const [submitLoading, setSubmitLoading] = useState(false);

    const onFinish = async (values: any) => {
        setSubmitLoading(true)
        const res = await loginAction(values).finally(() => setSubmitLoading(false))
        dispatch(setInsideUserInfo({ ...res.data.userInfo }))
        console.log(res.data);
        dispatch(setToken({ accessToken: res.data.token.accessToken, refreshToken: res.data.token.refreshToken }))
        // dispatch(getAsyncAuthMenus())
        navigate("/admin")
        message.success("登录成功！")
    }

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 },
    };

    return (
        <div className="login-container">
            <div className="login-container-form">
                <h1 className="login-container-logo">Easy-Admin Log in</h1>
                <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
                    <Form.Item label="账户" name="userName" rules={[{ required: true, message: '请输入账号' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码" name="passWord" rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password autoComplete="off" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Button block type="primary" htmlType="submit" loading={submitLoading}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
