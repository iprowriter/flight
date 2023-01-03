import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface iSelectedFlight {
    flightDetail: {
      
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
}



const initialState: iSelectedFlight = {
    flightDetail: {
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
}

export const userFlightSlice = createSlice({
  name: 'selectedFlight',
  initialState,
  reducers: {
  
    userFlight: (state, action: PayloadAction<any>) => {
    
     state.flightDetail.id = action.payload.id
     state.flightDetail.name = action.payload.name
     state.flightDetail.code = action.payload.code
     state.flightDetail.destinationCity = action.payload.destinationCity
     state.flightDetail.destinationCountry = action.payload.destinationCountry
     state.flightDetail.departureCity = action.payload.departureCity
     state.flightDetail.departureCountry = action.payload.departureCountry
     state.flightDetail.price.economy = action.payload.price.economy
     state.flightDetail.price.premium = action.payload.price.premium
     state.flightDetail.price.business = action.payload.price.business
     state.flightDetail.imageUrl = action.payload.imageUrl
     state.flightDetail.flightCode = action.payload.flightCode
     state.flightDetail.aircraft = action.payload.aircraft
     state.flightDetail.departureTime = action.payload.departureTime
     state.flightDetail.arrivalTime = action.payload.arrivalTime
     state.flightDetail.departure = action.payload.departure
     state.flightDetail.arrival = action.payload.arrival
         
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { userFlight } = userFlightSlice.actions

export default userFlightSlice.reducer