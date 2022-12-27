import { configureStore } from '@reduxjs/toolkit'
import flightSelection from './slices/flightSelection'

export const store = configureStore({
  reducer: {
    flight: flightSelection
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch