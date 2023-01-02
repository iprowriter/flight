import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface iSelectedFlight {
    id: number,
    name: string,
    code: string,
    destinationCity: string,
    destinationCountry: string,
    departureCity: string,
    departureCountry: string,
    price: {economy: number, premium: number, business: number},
    imageUrl: string,
    flightCode: number,
    aircraft: string,
    departureTime: string,
    arrivalTime: string,
    departure: string,
    arrival: string,
}



const initialState: iSelectedFlight = {
    id: 0,
    name: "",
    code: "",
    destinationCity: "",
    destinationCountry: "",
    departureCity: "",
    departureCountry: "",
    price: {economy: 0, premium: 0, business: 0},
    imageUrl: "",
    flightCode: 0,
    aircraft: "",
    departureTime: "",
    arrivalTime: "",
    departure: "",
    arrival: ""
}

export const userFlightSlice = createSlice({
  name: 'selectedFlight',
  initialState,
  reducers: {
  
    userFlight: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.code = action.payload.code
      state.destinationCity = action.payload.destinationCity
      state.destinationCountry = action.payload.destinationCountry
      state.departureCity = action.payload.departureCity
      state.departureCountry = action.payload.departureCountry
      state.price.economy = action.payload.price.economy
      state.price.premium = action.payload.price.premium
      state.price.business = action.payload.price.business
      state.imageUrl = action.payload.imageUrl
      state.flightCode = action.payload.flightCode
      state.aircraft = action.payload.aircraft
      state.departureTime = action.payload.departureTime
      state.arrivalTime = action.payload.arrivalTime
      state.departure = action.payload.departure
      state.arrival = action.payload.arrival
      
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { userFlight } = userFlightSlice.actions

export default userFlightSlice.reducer