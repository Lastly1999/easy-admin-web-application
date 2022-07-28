import { createSlice } from "@reduxjs/toolkit";

export type ThemeOption = 'dark' | 'light'

export type ConfigState = {
	theme: 'dark' | 'light'
}

const initialState: ConfigState = {
	theme: 'dark' // default app theme dark
}


const configSlice = createSlice({
	name: "config",
	initialState,
	reducers: {
		setTheme: (state, { payload }: { payload: { theme: ThemeOption } }) => {
			state.theme = payload.theme
		}
	}
})

export default configSlice.reducer