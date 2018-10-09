import { Injectable } from '@angular/core';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulehandlerService {

  
  schedule:Schedule[];
  constructor() {
    this.schedule=[]; 
   }
   addSchedule(sch:Schedule):number{
     this.schedule.push(sch);
     return this.schedule.length;
   }
   getAllSchedule():Schedule[]{
     return this.schedule;
   }
   searchResult(date:string):Schedule[]{
   return this.schedule.filter(
      s => s.date == date);

    
   }
}
