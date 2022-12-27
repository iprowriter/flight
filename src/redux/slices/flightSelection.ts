import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface flightSelectionState {
  value: string
}

const initialState: flightSelectionState = {
  value: "",
}

export const flightSlice= createSlice({
  name: 'flight',
  initialState,
  reducers: {
  
    userDeparture: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },

    userDestination: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userDeparture, userDestination } = flightSlice.actions

export default flightSlice.reducer