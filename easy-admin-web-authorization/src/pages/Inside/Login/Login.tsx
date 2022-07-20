import { defineComponent, ref } from "vue"
import {Button, Form, Input, Checkbox, InputPassword} from "ant-design-vue"
// @ts-ignore
import { UserOutlined,WechatOutlined,GithubOutlined,LockOutlined} from '@ant-design/icons-vue'
import LoginButtonGroup from "@/pages/Inside/Login/components/LoginButtonGroup/LoginButtonGroup";
import type {LoginButtonGroupOpt} from "@/pages/Inside/Login/components/LoginButtonGroup/LoginButtonGroup";
import "./Login.less"

/**
 * 系统授权内部登录页
 */
const Login = defineComponent({

    setup() {

        const loginForm = ref({
            userName: '',
            passWord: ''
        })

        const loginAction = () => {
            // todo
            window.microAppProps.microAppRouter.push("/admin")
            window.microAppProps.microAppEmit.login()
        }

        /**
         * 渲染表单的工具登录操作
         */
        const renderLoginButtonGroupData:Array<LoginButtonGroupOpt> = [
            {
                text:"使用Github登录",
                block:true,
                type:'primary',
                icon:<GithubOutlined/>
            },
            {
                text:"使用微信登录",
                block:true,
                type:'primary',
                icon:<WechatOutlined/>
            }
        ]

        return () => (
            <div class="login-container">
                {/* 登录表单 */}
                <div class="login-form-container">
                   <div class="login-form">
                       <h2 class="login-form-title">欢迎回来！</h2>
                       <Form model={loginForm}>
                           <Form.Item name="userName">
                               <Input size="large" placeholder="请输入账号" suffix={<UserOutlined />}></Input>
                           </Form.Item>
                           <Form.Item name="passWord" style={{marginBottom:'0px'}}>
                               <InputPassword size="large" placeholder="请输入密码"></InputPassword>
                           </Form.Item>
                           <div class="login-setup-tools">
                               <Checkbox>记住我</Checkbox>
                               <a href="">马上注册?</a>
                           </div>
                           <Button size="large" type="primary" block onClick={loginAction}>登录</Button>
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