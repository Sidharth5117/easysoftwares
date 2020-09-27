import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  curruser:any;

private eventAuthError = new BehaviorSubject<string>("");
eventAuthError$ = this.eventAuthError.asObservable();

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {


this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;

        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })



 }



async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password).then(function() {
alert("Login Successful");     
this.router.navigate(['viewtasks']);   
}).catch(function(error) {
 var errorCode = error.code;
          var errorMessage = error.message;
 
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password');
          } else if(errorCode == 'auth/user-not-found'){
            alert('User not found');
          }
});

}








async logout(){
if(window.confirm('Are sure you want to logout ?')){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    alert("Logout Successful"); 
    this.router.navigate(['home']);
}
}


 getUserState()
{
return this.afAuth.authState;
}



}
