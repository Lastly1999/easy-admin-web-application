import React from "react"
import ReactDOM from "react-dom/client"
import AppRouter from "@/router/BasicRouter"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "@/app/store"
import { Provider } from "react-redux"
import "./setupMicroApp"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>
)
