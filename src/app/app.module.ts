import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/*import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';*/
import {RobotDeleteDialogComponent, RobotPickerDialogComponent, RobotsComponent} from './robots/robots.component';
import { BenderComponent } from './robots/bender/bender.component';
import { BeerbotComponent } from './robots/beerbot/beerbot.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from '@angular/material/dialog';
/*
const okraConfig = {
  clientId: `0oa8bpksm9SYCz1TQ5d5`,
  issuer: `https://dev-6346232.okta.com/oauth2/default`,
  redirectUri: 'http://localhost:4200/implicit/callback',
};
*/
//const oktaConfig = Object.assign({}, okraConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RobotsComponent,
    BenderComponent,
    BeerbotComponent,
    RobotPickerDialogComponent,
    RobotDeleteDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
    //OktaAuthModule,
    MatDialogModule,
  ],
  providers: [
    //{provide: OKTA_CONFIG, useValue: oktaConfig},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
  ],
  entryComponents: [
    RobotPickerDialogComponent, RobotDeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
