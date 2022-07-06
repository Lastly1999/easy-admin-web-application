import {configureStore} from "@reduxjs/toolkit"
// redux-persist
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'
// slices
import authReducers from "@/redux/festures/auth/authSlice";
import thunkMiddleware from "redux-thunk";


const persistConfig = {
    key: "root",
    storage: storage,
    devTools: process.env.NODE_ENV !== 'production',
}

const persistedReducer = persistReducer(persistConfig, authReducers)

const store = configureStore({
    // reducer收集
    reducer: persistedReducer,
    middleware: [thunkMiddleware]
})

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
export default store

