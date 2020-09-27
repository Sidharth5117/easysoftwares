import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../services/tasks.service';
@Component({
  selector: 'app-viewalltasks',
  templateUrl: './viewalltasks.component.html',
  styleUrls: ['./viewalltasks.component.css']
})
export class ViewalltasksComponent implements OnInit {


tasks: any;
  constructor(private as: TasksService) { }

  ngOnInit(): void {



this.as.getAllTasks().subscribe(data => {

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
