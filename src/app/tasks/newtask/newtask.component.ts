import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../services/tasks.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';


@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {



jdate: NgbDateStruct;
sdate: NgbDateStruct;
edate: NgbDateStruct;
sname: any;
area: string;
wtype: string;
wname: string;
agency: string;
masons: string;
labour: string;
status: string;
sites: any;
  constructor(private as: TasksService) { }

  ngOnInit(): void {


  }










search = (text$: Observable<string>) => {
      return text$.pipe(      
          debounceTime(200), 
          distinctUntilChanged(),
          // switchMap allows returning an observable rather than maps array
          switchMap( (searchText) =>  this.as.getSitesByName(searchText) )           
      );                 
    }


resultFormatBandListValue(value: any) {            
  return value.site;
}


inputFormatBandListValue(value: any)   {
  if(value.site)
    return value.site
  return value;
}





addTask()
{
let record= {};
record['Job Creation Month']=this.jdate.month;
record['Job Creation Year']=this.jdate.year; 
record['Job Creation Day']=this.jdate.day; 

record['Start Date Month']=this.sdate.month; 
record['Start Date Year']=this.sdate.year; 
record['Start Date Day']=this.sdate.day; 

record['End Date Month']=this.edate.month; 
record['End Date Year']=this.edate.year; 
record['End Date Day']=this.edate.day; 

record['Site Name']=this.sname.toLowerCase();
record['Area']=this.area;
record['Work Type']=this.wtype;
record['Work Name']=this.wname;
record['Agency']=this.agency;
record['Masons']=this.masons; 
record['Labour']=this.labour; 
record['Status']=this.status; 


this.as.addTask(record);
}
















}
