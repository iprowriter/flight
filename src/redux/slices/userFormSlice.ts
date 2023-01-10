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
  
    
    userFirstname: (state, action: PayloadAction<any>) => {
      state.firstname = action.payload
    },
    userLastname: (state, action: PayloadAction<any>) => {
      state.lastname = action.payload
    },
    userEmail: (state, action: PayloadAction<any>) => {
      state.email = action.payload
    },
    userAddress: (state, action: PayloadAction<any>) => {
      state.address = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userFirstname, userEmail, userLastname,userAddress } = formSlice.actions

export default formSlice.reducer