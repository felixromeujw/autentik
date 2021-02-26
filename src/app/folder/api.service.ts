import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getdados(url){

return this.http.get<any>(url+'/wp-json/wc/v3/products?consumer_key=ck_6af260f4a52d1b77b151baf835b3c54cdf85cda2&consumer_secret=cs_80b1f23993ed1a66f49a0ea0e805f5152c39cf24');

  }


    getcategoria(url){

return this.http.get<any>(url+'/wp-json/wc/v3/products/categories?consumer_key=ck_6af260f4a52d1b77b151baf835b3c54cdf85cda2&consumer_secret=cs_80b1f23993ed1a66f49a0ea0e805f5152c39cf24');

  }
}
