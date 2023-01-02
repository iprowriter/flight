import { configureStore } from '@reduxjs/toolkit'
import flightSelection from './slices/flightSelection'
import userSelectedFlight from './slices/userSelectedFlight'


export const store = configureStore({
  reducer: {
    flight: flightSelection,
    userSelectedFlight: userSelectedFlight
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch