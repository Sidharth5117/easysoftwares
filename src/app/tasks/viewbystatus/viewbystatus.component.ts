import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TasksService } from './../../services/tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewbystatus',
  templateUrl: './viewbystatus.component.html',
  styleUrls: ['./viewbystatus.component.css']
})
export class ViewbystatusComponent implements OnInit {
status:string;
tasks:any;
  constructor(private as: TasksService) { }

  ngOnInit(): void {
  }



getTasks()
{


this.as.getTasksByStatus(this.status).subscribe(data => {

      this.tasks = data.map(e => {
        return {
          id: e.payload.doc.id,
          sname: e.payload.doc.data()['Site Name'],
area: e.payload.doc.data()['Area'], 
wtype: e.payload.doc.data()['Work Type'],      
wname: e.payload.doc.data()['Work Name'], 
agency: e.payload.doc.data()['Agency'], 
masons: e.payload.doc.data()['Masons'], 
labour: e.payload.doc.data()['Labour'], 
status: e.payload.doc.data()['Status'], 
jdate: this.as.formatDate(e.payload.doc.data()['Job Creation Day'],e.payload.doc.data()['Job Creation Month'],e.payload.doc.data()['Job Creation Year']),
sdate: this.as.formatDate(e.payload.doc.data()['Start Date Day'],e.payload.doc.data()['Start Date Month'],e.payload.doc.data()['Start Date Year']),
edate: this.as.formatDate(e.payload.doc.data()['End Date Day'],e.payload.doc.data()['End Date Month'],e.payload.doc.data()['End Date Year']),


      };
      })
    });


}






}
