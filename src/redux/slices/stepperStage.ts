import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface stepperStageState {
  activeStep: number,
}

const initialState: stepperStageState = {
  activeStep: 0,
}

export const stepperSlice= createSlice({
  name: 'stepper',
  initialState,
  reducers: {
  
    userActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userActiveStep } = stepperSlice.actions

export default stepperSlice.reducer