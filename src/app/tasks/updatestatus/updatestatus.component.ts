import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TasksService } from './../../services/tasks.service';
@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
id:string;
task:any;

  constructor(private router: ActivatedRoute, private as: TasksService) { }

  ngOnInit(): void {

let docid = this.router.snapshot.paramMap.get('id');
this.id = docid;


this.as.getTask(docid).subscribe(data => {

      this.task = data;

    });

}

updateStatus()
{
let record = { };
record['Status']=this.task.Status;
this.as.updateTask(record, this.id);
}





 

}
