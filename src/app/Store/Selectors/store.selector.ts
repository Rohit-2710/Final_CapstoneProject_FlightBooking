import {createFeatureSelector, createSelector} from '@ngrx/store'
import { AppState } from '../Models/appState';
import { FlightState } from '../Reducers/store.reducer';

import { Flight } from '../Models/model';
export const selectFlightList=createFeatureSelector<AppState,FlightState>('flightState')
export const selectFlights=createSelector(selectFlightList,(state:FlightState)=>state.flights)