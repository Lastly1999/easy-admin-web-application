import { createSlice } from "@reduxjs/toolkit";

export type CommonState = {
	accessToken?: string,
	refreshToken?: string
}

const initialState: CommonState = {
	accessToken: undefined,
	refreshToken: undefined
}

export const commonSlice = createSlice({
	name: "commonSpace",
	initialState,
	reducers: {
		setCommonData: (state, { payload }: { payload: { accessToken: string, refreshToken: string } }) => {
			state.accessToken = payload.accessToken
			state.refreshToken = payload.refreshToken
		}
	}
})

export const { setCommonData } = commonSlice.actions

export default commonSlice.reducer