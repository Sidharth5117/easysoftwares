import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './user/login/login.component';
import { ProfileComponent} from './user/profile/profile.component';
import { ViewtasksComponent } from './tasks/viewtasks/viewtasks.component';


const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path : 'login', component: LoginComponent},
{path : 'profile', component: ProfileComponent},
{path : 'about', component: HomeComponent},
{path : 'viewtasks', component: ViewtasksComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
