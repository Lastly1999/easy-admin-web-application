import { defineComponent, ref } from "vue"
import { Form, Input } from "ant-design-vue"
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
        }

        return () => (
            <div class="login-container">
                <Form model={loginForm}>
                    <Form.Item label="UserName" name="userName">
                        <Input placeholder="请输入账号"></Input>
                    </Form.Item>
                    <Form.Item label="PassWord" name="passWord">
                        <Input placeholder="请输入密码"></Input>
                    </Form.Item>
                </Form>
            </div>
        )
    }
})

export default Login