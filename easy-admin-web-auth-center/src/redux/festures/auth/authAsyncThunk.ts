import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthMenus} from "@/services/Inside/auth/authService";

/**
 * @desc 异步获取系统菜单 (redux-thunk)
 * @author lastly1999
 * @date 0:23
 */
export const getAsyncAuthMenus = createAsyncThunk("auth/getAuthMenus", async () => {
    const ret = await getAuthMenus()
    return ret
})