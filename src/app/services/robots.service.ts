import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import {Product} from '../entities/product';


const baseUrl = 'http://localhost:4201';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any): Promise<any> {
    const token = await this.oktaAuth.getAccessToken();

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return result.toPromise();
  }

  getProducts(): Promise<any> {
    return this.request('get', `${baseUrl}/product`);
  }

  getProduct(id: string): Promise<any> {
    return this.request('get', `${baseUrl}/product/${id}`);
  }

  createProduct(product: Product): Promise<any> {
    console.log('createProduct ' + JSON.stringify(product));
    return this.request('post', `${baseUrl}/product`, product);
  }

  updateProduct(product: Product): Promise<any> {
    console.log('updateProduct ' + JSON.stringify(product));
    return this.request('post', `${baseUrl}/product/${product.id}`, product);
  }

  deleteProduct(id: string): Promise<any> {
    return this.request('delete', `${baseUrl}/product/${id}`);
  }
}
