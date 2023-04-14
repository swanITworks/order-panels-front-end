import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IntContentTypes } from "../../const/int-content"

interface AppState {
  choosenMaterial: string | null
}

const initialState: AppState = {
  choosenMaterial: null,
}

export const quontationSlice = createSlice({
  name: "quontation",
  initialState,
  reducers: {
    setChoosenMaterial: (state, acton: PayloadAction<string>) => {
      state.choosenMaterial = acton.payload
    },
    clearState: state => {
      state = { ...initialState }
    },
  },
})

export const quontationActions = quontationSlice.actions

export default quontationSlice.reducer
