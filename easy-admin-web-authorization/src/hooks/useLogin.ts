import { ref } from "vue"
import QiankunMicroAppsActions from "@/micros/actions";
import { ValidateErrorEntity } from "ant-design-vue/lib/form/interface";
import { loginAction } from "@/services/auth/auth";
import { SignInResult } from "@/services/model/auth/auth";

export interface ILoginForm {
	userName: string
	passWord: string
}

const useLogin = () => {

	const loginForm = ref<ILoginForm>({
		userName: '',
		passWord: ''
	})

	const login = async (values: ILoginForm) => {
		const { data: { token: { accessToken, refreshToken } } } = await loginAction(values)
		QiankunMicroAppsActions.actions.setGlobalState({
			accessToken,
			refreshToken
		})
		QiankunMicroAppsActions.actions.microAppRouter.push("/admin")
	}

	const finishFailed = (errorInfo: ValidateErrorEntity<ILoginForm>) => {
		console.log(errorInfo)
	}

	return {
		loginForm,
		login,
		finishFailed
	}
}

export default useLogin