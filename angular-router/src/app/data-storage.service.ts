import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private ht: HttpClient) { }

  productsUrl = "http://localhost:3000/products"
  cartUrl = "http://localhost:3000/cart"
  getdata() {
    return this.ht.get(this.productsUrl);
  }

  // postdata(data: any){
  //   return this.ht.post(this.cartUrl, data)
  //   // console.log("asdadsa");
    
  // }
}
