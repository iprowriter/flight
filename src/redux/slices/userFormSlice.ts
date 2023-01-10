import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userFormState {
  firstname: string,
  lastname: string,
  email: string,
  address: string
}

const initialState: userFormState = {
  firstname: "",
  lastname: "",
  email: "",
  address: ""
}

export const formSlice= createSlice({
  name: 'form',
  initialState,
  reducers: {
  
    userFormDetail: (state, action: PayloadAction<any>) => {
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.email = action.payload.email
      state.address = action.payload.address
    },
  },
})

// Action creators are generated for each case reducer function
export const { userFormDetail } = formSlice.actions

export default formSlice.reducer