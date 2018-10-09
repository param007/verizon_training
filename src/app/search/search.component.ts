import { Component, OnInit } from '@angular/core';
import {DatePipe } from '@angular/common';
import { SchedulehandlerService } from '../schedulehandler.service';
import { Schedule } from '../schedule.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dt:any;
  dat:DatePipe;
  sResult:Schedule[];
  constructor(private serv3:SchedulehandlerService) { }

  searchByDate(frm:any){
    this.dt=frm.date;
    var dat=new DatePipe('en-US');

    this.dt=dat.transform(this.dt,'dd/MM/yyyy');
    this.sResult=this.serv3.searchResult(this.dt);
    
    
  }
  ngOnInit() {
  }

}

/*
 <div [ngSwitch] ="s.status">
            <td *ngSwitchCase="important" ng-style="{color:red}">{{s.status}}</td>
            <td *ngSwitchCase="normal" >{{s.status}}</td>
          </div>*/
