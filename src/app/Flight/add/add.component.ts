import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import {Store} from '@ngrx/store'
import { addFlight } from 'src/app/Store/Actions/store.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  submitted:boolean = false;
  myForm:FormGroup
  constructor(private fb:FormBuilder,private api:APIService, private store:Store){
    this.myForm=this.fb.group({
      flightID:['',Validators.required],
      flightName:['',Validators.required]
    })
  }
  add= async (value:any) =>{
   await this.api.CreateFlight(value).then((data)=>{
      console.log(data)
      value.id=data.id
      value.ticket=[]
      this.store.dispatch(addFlight({flight:value}))
      this.submitted=true
    }).catch((err)=>{
      console.log(err)
    })
    

  }
  reset=()=>{
    this.myForm.reset()
    this.submitted=false  
  }

}
