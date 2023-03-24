import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Service/data-service.service';
import { APIService } from '../../API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateFlight } from 'src/app/Store/Actions/store.actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any
  myForm:FormGroup
  submitted:boolean=false
  constructor(private dataService:DataServiceService, private api:APIService, private fb:FormBuilder, private store:Store){
    this.myForm=this.fb.group({
      flightID:['',Validators.required],
      flightName:['',Validators.required]
    })
  }
  
  ngOnInit():void{
  this.dataService.getFlightID().subscribe((data)=>{
    this.id=data.id
    console.log(data)
  })
}
updateFlight=async(value:any)=>{
  value.id=this.id
  await this.api.UpdateFlight(value).then((data)=>{
   console.log(data)
   value.flightID=data.flightID
   value.flightName=data.flightName
   value.ticket=data.ticket?.items
   this.store.dispatch(updateFlight({flight:value}))
   this.submitted=true
  })
}
reset(){
  this.submitted=false
  this.myForm.reset()
}
}

