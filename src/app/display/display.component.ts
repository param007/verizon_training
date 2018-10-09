import { Component, OnInit } from '@angular/core';
import { SchedulehandlerService } from '../schedulehandler.service';
import { Schedule } from '../schedule.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  sch:Schedule[];
  constructor(private serv2:SchedulehandlerService) {
    
   }
  
  ngOnInit() {
    this.sch=this.serv2.getAllSchedule();
  
  }

}
