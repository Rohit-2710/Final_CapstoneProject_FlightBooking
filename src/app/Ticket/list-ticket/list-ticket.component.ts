import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { DataServiceService } from '../../Service/data-service.service';
import { Store } from '@ngrx/store';
import { selectFlights } from 'src/app/Store/Selectors/store.selector';
import { AppState } from '../../Store/Models/appState';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  data:any
  submitted:boolean = false
  constructor(private api:APIService, private dataService:DataServiceService, private store:Store<AppState>){}
  ngOnInit():void{
  this.api.ListFlights().then((data)=>{
    this.data=data.items
    console.log(this.data)
  })
  // this.store.select(selectFlights).subscribe((data)=>{
  //   console.log(data)
  //   this.data=data
  // })
  }
  addTicket(id:any){
    this.dataService.setFlightIDTicket({id:id})  
  }
  deleteTicket=(id:any)=>{
    this.api.DeleteTicket({id:id}).then((data)=>{
      console.log(data)
    }).catch((err)=>console.log(err))
  }
  createTicket=this.api.OnCreateTicketListener().subscribe((data:any)=>{
    console.log(data)
  })
  
  
}
