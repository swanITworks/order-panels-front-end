import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./App/app-slice"
import userReducer from "./User/user-slice"
import quontationReducer from "./Quontation/quontation-slice"
import { userApi } from "../services/user"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    quontation: quontationReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
