import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { _flightReducer, FlightState } from './Store/Reducers/store.reducer';
import { AddComponent } from './Flight/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './Flight/list/list.component';
import { HomeComponent } from './Home/home/home.component';
import { UpdateComponent } from './Flight/update/update.component';
import { ListTicketComponent } from './Ticket/list-ticket/list-ticket.component';
import { AddTicketComponent } from './Ticket/add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    HomeComponent,
    UpdateComponent,
    ListTicketComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({flightState:_flightReducer}),
    StoreDevtoolsModule.instrument({}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
