import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../API.service';
import { DataServiceService } from '../../Service/data-service.service';
import { addTicket } from '../../Store/Actions/store.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  myForm:FormGroup
  id:any
  submitted:boolean = false
  constructor(private fb:FormBuilder,private api:APIService,private dataService:DataServiceService, private store:Store){
    this.myForm=this.fb.group({
      bookingID:[0,Validators.required],
      name:['',Validators.required],
      noOfTickets:[0,Validators.required]
    })
  }
  ngOnInit():void{
    this.dataService.getFlightIDTicket().subscribe((id)=>{
      this.id=id.id
      console.log(this.id)
    }
    )
  }
  addTicket=async(value:any)=>{
    value.flightTicketId=this.id
    console.log(value)
    await this.api.CreateTicket(value).then((data)=>
    {console.log(data)
    this.store.dispatch(addTicket({data:data}))
    this.submitted=true
  }).catch((err)=>{
    console.log(err)
  })
  }
  reset=()=>{
    this.submitted=false
    this.myForm.reset()
  }

}
