import { ref } from "vue"
import QiankunMicroAppsActions from "@/micros/actions";
import { ValidateErrorEntity } from "ant-design-vue/lib/form/interface";
import { loginAction } from "@/services/auth/auth";

export interface ILoginForm {
	userName: string
	passWord: string
}

const useLogin = () => {

	const signCache = localStorage.getItem("SIGN-IN-CACHE") ? JSON.parse(localStorage.getItem("SIGN-IN-CACHE") as string) : null;

	const loginForm = ref<ILoginForm>({
		userName: signCache ? signCache.userName : "",
		passWord: signCache ? signCache.passWord : ""
	})

	const login = async (values: ILoginForm) => {
		const { data: { token: { accessToken, refreshToken } } } = await loginAction(values)
		localStorage.setItem("SIGN-IN-CACHE", JSON.stringify({
			...loginForm.value
		}))
		QiankunMicroAppsActions.actions.setGlobalState({
			accessToken,
			refreshToken
		})
		QiankunMicroAppsActions.actions.microAppRouter.push("/admin/workBench")
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