import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  token: string
}

const initialState: UserState = {
 token: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token= action.payload
    },
  },
})

export const userActions = userSlice.actions

export default userSlice.reducer