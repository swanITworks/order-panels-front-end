import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { intContentTypes } from "../../const/int-content"

interface AppState {
  isLeftMenuExtended: boolean
  isAppLoading: boolean
  errors: string[]
  isModalOpen: boolean
  currentLanguage: keyof intContentTypes
}

const initialState: AppState = {
  isLeftMenuExtended: true,
  isAppLoading: false,
  errors: [],
  isModalOpen: false,
  currentLanguage: "eng",
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    unExtendLeftMenu: state => {
      state.isLeftMenuExtended = false
    },
    extendLeftMenu: state => {
      state.isLeftMenuExtended = true
    },
    setLoadingOn: state => {
      state.isAppLoading = true
    },
    setLoadingOff: state => {
      state.isAppLoading = false
    },
    setError: (state, acton: PayloadAction<string>) => {
      state.errors.push(acton.payload)
    },
    clearErrors: state => {
      state.errors = []
    },
    setModalOpen: state => {
      state.isModalOpen = true
    },
    setModalClose: state => {
      state.isModalOpen = false
    },
  },
})

export const appActions = appSlice.actions

export default appSlice.reducer
