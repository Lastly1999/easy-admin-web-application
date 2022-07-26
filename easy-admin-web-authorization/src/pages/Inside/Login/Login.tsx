import { defineComponent, ref } from "vue"
import { Button, Form, Input, Checkbox, InputPassword } from "ant-design-vue"
import { UserOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons-vue'
import LoginButtonGroup from "@/pages/Inside/Login/components/LoginButtonGroup/LoginButtonGroup";
import type { LoginButtonGroupOpt } from "@/pages/Inside/Login/components/LoginButtonGroup/LoginButtonGroup";
import useLogin from "@/hooks/useLogin"
import "./Login.less"

/**
 * 系统授权内部登录页
 */
const Login = defineComponent({

    setup() {

        const { loginForm, login, finishFailed } = useLogin()
        
        const renderLoginButtonGroupData: Array<LoginButtonGroupOpt> = [
            {
                text: "使用Github登录",
                block: true,
                type: 'primary',
                icon: <GithubOutlined />
            },
            {
                text: "使用微信登录",
                block: true,
                type: 'primary',
                icon: <WechatOutlined />
            }
        ]

        const formRules = {
            userName: [{ required: true, message: '账号不能为空哦！' }],
            passWord: [{ required: true, message: '密码不能为空哦！' }],
        }

        return () => (
            <div class="login-container">
                {/* 登录表单 */}
                <div class="login-form-container">
                    <div class="login-form">
                        <h2 class="login-form-title">欢迎回来！</h2>
                        <Form model={loginForm.value} onFinish={login} onFinishFailed={finishFailed}>
                            <Form.Item name="userName" rules={formRules.userName}>
                                <Input v-model:value={loginForm.value.userName} size="large" placeholder="请输入账号" suffix={<UserOutlined />}></Input>
                            </Form.Item>
                            <Form.Item name="passWord" rules={formRules.passWord} style={{ marginBottom: '0px' }} >
                                <InputPassword v-model:value={loginForm.value.passWord} size="large" placeholder="请输入密码"></InputPassword>
                            </Form.Item>
                            <div class="login-setup-tools">
                                <Checkbox>记住我</Checkbox>
                                <a href="">马上注册?</a>
                            </div>
                            <a-form-item>
                                <Button size="large" type="primary" block html-type="submit">登录</Button>
                            </a-form-item>
                        </Form>
                        <a-divider>或者</a-divider>
                        {/* 登录表单多按钮组件 */}
                        <LoginButtonGroup opts={renderLoginButtonGroupData}></LoginButtonGroup>
                    </div>
                </div>
                {/* 图形矩形 */}
                <div class="login-form-right-container">
                    <div class="login-form-right-img"></div>
                </div>
            </div>
        )
    }
})

export default Login