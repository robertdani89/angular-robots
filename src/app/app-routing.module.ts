import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import {RobotsComponent} from './robots/robots.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'robots',
    component: RobotsComponent,
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
