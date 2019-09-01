import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import {ProfileService} from './services/profile.service';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'profile', component: ProfileService},
  { path: 'about', component: AboutComponent},
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }