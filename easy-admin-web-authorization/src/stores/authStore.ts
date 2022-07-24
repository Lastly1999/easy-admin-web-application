import {defineStore} from "pinia"
// apis
import {loginAction} from "@/services/auth/auth"
import {ILoginInfo} from "@/services/model/auth/auth";

export const useAuthStore = defineStore("auth",{
    state:() => ({
        userInfo:""
    }),
    getters:{
        getUserInfo:(state) => state.userInfo
    },
    actions:{
        async login(loginInfo:ILoginInfo){
            try{
                const result = await loginAction(loginInfo)
                this.userInfo = result.data
            }catch(err){
                return err
            }
        }
    }
})