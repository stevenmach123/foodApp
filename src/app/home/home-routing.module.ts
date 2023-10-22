import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { HomePage } from './home.page';
import {Service1} from "../service1";
import { RecordComponent } from '../record/record.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
     
    ],
   
  },
  {path:'calendar', component:CalendarComponent},
  {path:'record', component:RecordComponent}
 
];

@NgModule({
  imports: [

    RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class HomePageRoutingModule {}
