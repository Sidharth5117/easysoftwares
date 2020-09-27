import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

 monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  constructor(public fireservices: AngularFirestore, public  router:  Router) { }


addTask(Record)
{
alert("Task Added Successfully");
this.router.navigate(['viewtasks']);
return this.fireservices.collection('Tasks').add(Record);

}


getAllTasks()
{

return this.fireservices.collection('Tasks').snapshotChanges();

}



formatDate(d,m,y)
{
 var t = new Date(y,m-1,d);
return d + ' ' + this.monthNames[t.getMonth()] + ', ' + y;

}




}
