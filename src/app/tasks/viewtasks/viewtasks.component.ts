import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent implements OnInit {
date: any;


  constructor(private as: TasksService) { }

  ngOnInit(): void {
 this.date=moment().format('LL');
  
}

}
