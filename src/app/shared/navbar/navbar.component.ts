import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 title = 'Task Manager';

 user: firebase.User;


  constructor(private as: AuthService) { }

  ngOnInit(): void {
this.as.getUserState().subscribe( user => {
this.user=user;
})
  }


logout()
{
this.as.logout();
}


}
