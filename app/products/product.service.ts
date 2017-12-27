import { Injectable } from "@angular/core";
import { IProduct } from "./product";
//import {HttpClient, Response, Headers, RequestOptions } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{
        constructor (private _http: HttpClient) {

        }

       private apiPrductUrl :string = "/api/products/products.json";
        getProducts(): Observable<IProduct[]> {
           return this._http.get(this.apiPrductUrl)
           .do(data=> JSON.stringify(data))
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }
        
        private extractData(data) {
            let body = JSON.stringify(data);
            return body;
        } 


}