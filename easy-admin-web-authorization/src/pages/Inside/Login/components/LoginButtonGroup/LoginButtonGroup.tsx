import {defineComponent,PropType} from "vue"
import {Button, ButtonProps} from "ant-design-vue";

export type LoginButtonGroupOpt = {
    text:string
} & ButtonProps

const LoginButtonGroup = defineComponent({
    props:{
        opts:{
            type:Array as PropType<LoginButtonGroupOpt[]>,
            default:() => []
        },
        marginBottom:{
            type:String,
            default:() => "10px"
        }
    },
    setup(props){
        return () => (
            <div class="login-button-group">
                {
                    props.opts?.map((item) => (
                        <Button style={{marginBottom:props.marginBottom}} {...item}>
                            {item.text}
                        </Button>
                    ))
                }
            </div>
        )
    }
})

export default LoginButtonGroup