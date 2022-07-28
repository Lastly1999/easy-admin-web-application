import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit"
// redux-persist
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage'
// slices
import authReducers from "@/festures/auth/authSlice";
import configReducers from "@/festures/config/configSlice"
import commonReducers from "@/festures/common/commonSlice"

const persistConfig = {
    key: "root",
    storage: storage,
    devTools: process.env.NODE_ENV !== 'production',
}

const rootReducers = combineReducers({
    auth: authReducers,
    config: configReducers,
    common: commonReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    // reducer收集
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const persistor = persistStore(store)
export default store

