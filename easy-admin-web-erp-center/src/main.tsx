import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "@/router/BasicRouter"
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@/redux';
import { Provider } from "react-redux"
import "./setupMicroApp"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
