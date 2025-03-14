import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Product } from '../interfaces/singleProduct.model';
import { products } from '../interfaces/products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService  {
  product = new BehaviorSubject<products>({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  })

  private apiUrl = ' https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getAllCategoriesOfProducts() {
    return this.http.get<string[]>(`${this.apiUrl}/category-list`)
  }

  getProductsByCategoryName(CategoryName:string) {
    return this.http.get<products>(`${this.apiUrl}/category/${CategoryName}`)
  }
}
