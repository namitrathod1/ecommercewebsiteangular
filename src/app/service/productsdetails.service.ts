import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';

@Injectable()
export class ProductsdetailsService {
  products: any;
  constructor(private http: HttpClient) {}
  getproducts() {
    return this.http.get(
      `${environment.apiEndpoint}${appConstant.apiRoute.products}`
    );
  }
}
