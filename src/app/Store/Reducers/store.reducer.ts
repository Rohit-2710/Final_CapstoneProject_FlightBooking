import { Flight, Tickets } from "../Models/model";
import {createReducer,on} from '@ngrx/store'
import * as flightActions from '../Actions/store.actions'
export interface FlightState{
    flights:Flight[]
}

export const initialstate:FlightState={
    flights:[]
}

export const _flightReducer=createReducer(
  initialstate,
  on(flightActions.addFlight,(state,{flight})=>{
    console.log(flight)
        return{
            ...state,
            flights:[...state.flights,flight]
        }

  }),
  // on(flightActions.addTicket,(state,{data})=>{
  //    var oldState=[...state.flights]
  //    var newState=[...state.flights]
  //    newState=newState.filter((x:any)=>x.id!=data.flightTicketId)
  //    oldState=oldState.filter((x:any)=>x.id==data.flightTicketId)
  //    var currFlight=oldState[0]
  //    var value:Tickets={
  //     id:data.id,
  //     name:data.name,
  //     bookingID:data.bookingID,
  //     noOfTickets:data.noOfTickets
  //    }
  //    var arr=[...currFlight.ticket,value]
  //    var flight:Flight={
  //     id:currFlight.id,
  //     flightID:currFlight.flightID,
  //     flightName:currFlight.flightName,
  //     ticket:[]


  //    }
  //    var arr=currFlight.ticket
  //    arr.push(value)
  //    currFlight.ticket=[...arr]
  //    return{
  //       ...state,
  //       flights:[]
  //    }
  // }),
  on(flightActions.deleteFlight,(state,{id})=>{
    console.log(id)
    var newArray=state.flights
    newArray=newArray.filter((x:any)=>
       x.id!=id 
    )
    return{
        ...state,
        flights:[...newArray]
    }
  }),
  on(flightActions.updateFlight,(state,{flight})=>{
    var newArray=[...state.flights]
    newArray=newArray.filter((x:any)=>x.id!=flight.id)
    return{
        ...state,
        flights:[...newArray,flight]
    }
  })
)
