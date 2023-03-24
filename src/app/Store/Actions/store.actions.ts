import { createAction, props } from "@ngrx/store";
import { Flight, Tickets } from '../Models/model';

export const addFlight=createAction('[Flight] Add flight',props<{flight:Flight}>())
export const addTicket=createAction('[Ticket]Add ticket',props<{data:any}>())
export const deleteFlight=createAction('[Flight] Delete Flight',props<{id:any}>())
export const updateFlight=createAction('[Flight] Update Flight', props<{flight:Flight}>())