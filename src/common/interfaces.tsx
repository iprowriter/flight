export interface iFlightData {
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
    travelTime?: number 
}

export interface iCities {
    city: string,
    imageURL: string,
    price: number
  
  }