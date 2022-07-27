import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { getAuthMenus } from "@/services/Inside/auth/auth";


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


/**
 * @desc 异步获取系统菜单 (redux-thunk)
 * @author lastly1999
 * @date 0:23
 */
export const getAuthMenusThunk = createAsyncThunk("authSpace/getAuthMenusThunk", async (_, thunkApi) => await getAuthMenus())

const initialState: AuthState = {
    userInfo: undefined,
    menus: [],
    accessToken: undefined,
    refreshToken: undefined
}

const authSlice = createSlice({
    name: "authSpace",
    initialState,
    reducers: {
        setInsideUserInfo: (state, { payload }: { payload: UserInfo }) => {
            state.userInfo = { ...payload }
        },
        setToken: (state, { payload }: { payload: { accessToken: string, refreshToken: string } }) => {
            state.accessToken = payload.accessToken
            state.refreshToken = payload.refreshToken
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAuthMenusThunk.fulfilled, (state, action) => {
            state.menus = action.payload.data
        })
    }
})

export const { setInsideUserInfo, setToken } = authSlice.actions
export default authSlice.reducer