import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NewtaskComponent } from './tasks/newtask/newtask.component';
import { ViewtasksComponent } from './tasks/viewtasks/viewtasks.component';
import { OptionsComponent } from './shared/options/options.component';
import { ViewalltasksComponent } from './tasks/viewalltasks/viewalltasks.component';
import { UpdatestatusComponent } from './tasks/updatestatus/updatestatus.component';
import { ViewbystatusComponent } from './tasks/viewbystatus/viewbystatus.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    NewtaskComponent,
    ViewtasksComponent,
    OptionsComponent,
    ViewalltasksComponent,
    UpdatestatusComponent,
    ViewbystatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule,
ReactiveFormsModule,
AngularFireAuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
