import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit"
// redux-persist
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage'
// slices
import authReducers, { AuthState } from "@/redux/festures/auth/authSlice";
import configReducers, { ConfigState } from "@/redux/festures/config/configSlice"
import commonReducers, { CommonState } from "@/redux/festures/common/commonSlice"
import thunkMiddleware from "redux-thunk";


export interface RootState {
    authState: AuthState,
    configState: ConfigState,
    commonState: CommonState
}

const persistConfig = {
    key: "root",
    storage: storage,
    devTools: process.env.NODE_ENV !== 'production',
}

const rootReducers = combineReducers({
    authState: authReducers,
    configState: configReducers,
    commonState: commonReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    // reducer收集
    reducer: persistedReducer,
    middleware: [thunkMiddleware]
})

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
export default store

