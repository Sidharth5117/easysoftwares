import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent implements OnInit {
date: any;
  constructor() { }

  ngOnInit(): void {
 this.date=moment().format('LL');  
}

}
