import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = ' https://dummyjson.com/products';

  constructor(private http: HttpClient) {}


  getallproduct(){
    return this.http.get(' https://dummyjson.com/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://dummyjson.com/products');
  }
}
