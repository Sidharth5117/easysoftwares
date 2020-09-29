import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import * as moment from 'moment';
import { Observable } from 'rxjs';

export interface Site { name: string; }


@Injectable({
  providedIn: 'root'
})
export class TasksService {
doc:any;
 monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  constructor(public fireservices: AngularFirestore, public  router:  Router) { }


addTask(Record)
{
alert("Task Added Successfully");
this.router.navigate(['viewtasks']);
this.addSiteName(Record['Site Name']);
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








addSiteName(site)
{

this.fireservices.collection('Sites', ref => ref.where('site', '==', site )).snapshotChanges().subscribe(res => {
    if (res.length > 0)
    {
   
    }
    else
    {
    let record = {};
    record['site'] = site;
     return this.fireservices.collection('Sites').add(record);
    }
});




}




getSitesByName(name)
{
name = name.toLowerCase();
return this.fireservices.collection('Sites', ref => ref.orderBy('site').startAt(name).endAt(name + '\uf8ff').limit(5)).valueChanges();


}




}
