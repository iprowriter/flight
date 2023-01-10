import { configureStore } from '@reduxjs/toolkit'
import flightSelection from './slices/flightSelection'
import userSelectedFlight from './slices/userSelectedFlight'
import stepperStage from './slices/stepperStage'
import userFormSlice from './slices/userFormSlice'


export const store = configureStore({
  reducer: {
    flight: flightSelection,
    userSelectedFlight: userSelectedFlight,
    stepperStage: stepperStage,
    userFormDetail: userFormSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch