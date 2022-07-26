import { createSlice } from "@reduxjs/toolkit"
import { getAuthMenus } from "@/services/Inside/auth/auth";
import { getAsyncAuthMenus } from "@/redux/festures/auth/authAsyncThunk";


export interface AuthState {
    userInfo?: UserInfo
    menus: []
    accessToken?: string
    refreshToken?: string
}

export type UserInfo = {
    userName: string
    roleId: number
}


const initialState: AuthState = {
    userInfo: undefined,
    menus: [],
    accessToken: undefined,
    refreshToken: undefined
}

export const authSlice = createSlice({
    name: "authSpace",
    initialState,
    reducers: {
        setInsideUserInfo: (state, { payload }: { payload: UserInfo }) => {
            state.userInfo = { ...payload }
        },
        setToken: (state, { payload }: { payload: { accessToken: string, refreshToken: string } }) => {
            // state.accessToken = payload.accessToken
            // state.refreshToken = payload.refreshToken
            state = { ...state, ...payload }
        },
        fetchAuthMenus: (state) => {
            getAuthMenus().then((res) => {
                state.menus = res.data.menus
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncAuthMenus.fulfilled, (state, action) => {
            console.log(action)
            state.menus = action.payload.data
        })
        builder.addCase(getAsyncAuthMenus.rejected, (state, err) => {
            console.error(err)
        })
        builder.addCase(getAsyncAuthMenus.pending, (state) => {
            console.warn("pending", state)
        })
    }
})

export const { setInsideUserInfo, fetchAuthMenus, setToken } = authSlice.actions

export default authSlice.reducer