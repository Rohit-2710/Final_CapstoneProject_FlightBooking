import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Flight/add/add.component';
import { ListComponent } from './Flight/list/list.component';
import { HomeComponent } from './Home/home/home.component';
import { UpdateComponent } from './Flight/update/update.component';
import { ListTicketComponent } from './Ticket/list-ticket/list-ticket.component';
import { AddTicketComponent } from './Ticket/add-ticket/add-ticket.component';

const routes: Routes = [
  {path:'add-flight', component:AddComponent},
  {path:'list-flight',component:ListComponent},
  {path:'',component:HomeComponent},
  {path:'update-flight',component:UpdateComponent},
  {path:'add-flight/list', redirectTo:'list-flight',pathMatch:'full'},
  {path:'list-flight/update', redirectTo:'update-flight',pathMatch:'full'},
  {path:'update-flight/list', redirectTo:'list-flight',pathMatch:'full'},
  {path:'list-ticket', component:ListTicketComponent},
  {path:'list-ticket/add',redirectTo:'add-ticket', pathMatch:'full' },
  {path:'add-ticket', component:AddTicketComponent},
  {path:'add-ticket/list',redirectTo:'list-ticket',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
