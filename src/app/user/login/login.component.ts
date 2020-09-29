  
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
user: firebase.User;
password: string;
  constructor(public auth: AngularFireAuth, public  router:  Router, public as: AuthService) { }

  ngOnInit(): void {

this.as.getUserState().subscribe( user => {
this.user=user;
if(this.user)
{
this.router.navigate(['viewalltasks']);
}
else
{
}
})



  }


loginUser()
{
this.as.login(this.email,this.password);
}


}
