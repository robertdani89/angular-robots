import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import {RobotsComponent} from './robots/robots.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: 'HomePage'}
  },
  {
    path: 'robots',
    component: RobotsComponent,
    data: {animation: 'RobotsPage'}
    //canActivate: [OktaAuthGuard]
  },
 /* {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
