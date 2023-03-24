import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/Store/Models/appState';
import {Store} from '@ngrx/store'
import { APIService } from '../../API.service';
import { selectFlights } from '../../Store/Selectors/store.selector';
import { deleteFlight } from '../../Store/Actions/store.actions';
import { DataServiceService } from '../../Service/data-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  data:any
  id:any
  constructor(private store:Store<AppState>,private api:APIService, private dataService:DataServiceService){}

  ngOnInit():void{
    // this.store.select(selectFlights).subscribe((data)=>{
    //   console.log(data)
    //   this.data=data
    // })
    this.api.ListFlights().then((data)=>{
      this.data=data.items
      
    })

    
  }
  deleteFlight= async(id:any)=>{
    console.log(id)
    await this.api.DeleteFlight({id:id}).then(async(data)=>{
      console.log(data)
      data.ticket?.items.forEach(async(x:any)=>{
        await this.api.DeleteTicket({id:x.id}).then((data)=>{
          console.log('Ticket deleted')
        }).catch((err)=>{
          console.log('Error deleting'+err)
        })
      })
      this.store.dispatch(deleteFlight({id:id}))

    }).catch((err)=>{
      console.log(err)
    }) 
  }
  update(id:any){
    this.dataService.setFlightID({id:id})
    
  }
  

}
