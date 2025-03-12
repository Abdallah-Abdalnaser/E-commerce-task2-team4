import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  APilink:string = 'https://dummyjson.com/products'
  constructor(private HTTP:HttpClient) { }

  searchProductByName (productName:string) {
    return this.HTTP.get<any>(
      `${this.APilink}/search`,
      {
        params:new HttpParams().set('q',productName)
      }
    )
  }
}
