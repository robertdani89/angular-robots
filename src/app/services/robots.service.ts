import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { OktaAuthService } from '@okta/okta-angular';
import {Robot} from '../entities/robot';

const baseUrl = `http://${window.location.hostname}:4201`;

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(/*public oktaAuth: OktaAuthService,*/ private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any): Promise<any> {
    //const token = await this.oktaAuth.getAccessToken();
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      /*headers: {
        Authorization: `Bearer ${token}`
      }*/
    });

    return result.toPromise();
  }

  getRobots(): Promise<any> {
    return this.request('get', `${baseUrl}/robots`);
  }

  getBenderDetails(robotId: number): Promise<any> {
    return this.request('get', `${baseUrl}/robots/bender/${robotId}`);
  }

  getBeerBotDetails(robotId: number): Promise<any> {
    return this.request('get', `${baseUrl}/robots/beerbot/${robotId}`);
  }

  getRobot(id: string): Promise<any> {
    return this.request('get', `${baseUrl}/robots/${id}`);
  }

  createBenderRobot(): Promise<any> {
    return this.request('post', `${baseUrl}/robots`, {name: 'New Bender', modelId: 1});
  }

  createBeerRobot(): Promise<any> {
    return this.request('post', `${baseUrl}/robots`, {name: 'New BeerBot', modelId: 2});
  }

  updateRobot(robot: Robot): Promise<any> {
    return this.request('post', `${baseUrl}/robots/${robot.id}`, robot);
  }

  deleteRobot(id: number): Promise<any> {
    return this.request('delete', `${baseUrl}/robots/${id}`);
  }

  pourBeer(robot: Robot): Promise<any> {
    return this.request('post', `${baseUrl}/robots/beerbotbeer/${robot.id}`);
  }
}
