

export interface Tickets{
    id:string
    name:string
    noOfTickets:number
    bookingID:number
}

export interface Flight{
    id:string
    flightID:string
    flightName:string
    ticket:[Tickets]
}