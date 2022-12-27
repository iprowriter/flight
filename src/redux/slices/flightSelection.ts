import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface flightSelectionState {
  departure: string,
  destination: string
}

const initialState: flightSelectionState = {
  departure: "",
  destination: "",
}

export const flightSlice= createSlice({
  name: 'flight',
  initialState,
  reducers: {
  
    userDeparture: (state, action: PayloadAction<string>) => {
      state.departure = action.payload
    },

    userDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userDeparture, userDestination } = flightSlice.actions

export default flightSlice.reducer