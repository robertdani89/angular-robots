import {Component, OnInit} from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'For OnRobot';
  public isAuthenticated: boolean;

  constructor(/*public oktaAuth: OktaAuthService*/) {
    /*this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );*/
  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = true; //await this.oktaAuth.isAuthenticated();
  }

  login(): void {
    //this.oktaAuth.loginRedirect();
  }

  logout(): void {
    //this.oktaAuth.logout('/');
  }
}
