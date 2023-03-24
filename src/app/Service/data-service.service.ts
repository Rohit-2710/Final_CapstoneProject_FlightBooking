import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private updateFlightID= new BehaviorSubject<any>({
    id:''
  })
  private updateFlightID$=this.updateFlightID.asObservable()
  getFlightID():Observable<any>{
    return this.updateFlightID$
  };
  setFlightID(id:any){
    return this.updateFlightID.next(id)
  }

  private addTicket=new BehaviorSubject<any>({
    id:''
  })

  private addTicket$=this.addTicket.asObservable()
  getFlightIDTicket():Observable<any>{
    return this.addTicket$
  }
  setFlightIDTicket(id:any){
    return this.addTicket.next(id)
  }

  
}
