import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule.model';
import { SchedulehandlerService } from '../schedulehandler.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  sch:Schedule;  
  l:number;
  dt:DatePipe;
  constructor(private serv1: SchedulehandlerService, private rt:Router) { 

  }

  

  addSch(){
    this.dt=new DatePipe('en-US');
    var d= this.sch.date;
    this.sch.date= this.dt.transform(d,'dd/MM/yyyy');
   
   this.l= this.serv1.addSchedule(this.sch);
    this.rt.navigate(['display']);
  
  }
  
  ngOnInit() {
    this.sch=new Schedule();
    
  }

}
