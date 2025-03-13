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
  productsClonewithoutPRiceRange:products={
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  };
  productsunder20:products={
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  };
  productsBetween20and50:products={
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  };
  productsabove50:products={
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  };

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


  AllProductwithoutpriceRange() {
    // this.product.subscribe(
    //     (data:products)=> {
    //       this.AllProductwithoutpriceRange= data;
    //     }
    //   )
  }

  Productunder20() {
    // debugger;
    // console.log(!this.productsClone.products);
    // console.log(this.productsClone.products);

    // if (!this.productsClone.products) {
    //   this.displayedData();
    // } else {
    //   this.productsDisplayed = this.product.subscribe(
    //     (data:products)=> {
    //       this.product.next({
    //         total:(data.products.filter((el)=> {el.price < 20})).length,
    //         skip:0,
    //         limit:0,
    //         products:data.products.filter((el)=> {el.price < 20})})
    //     }
    //   )
    // }
  }

  Productbetween20and50() {
    // debugger;
    // console.log(!this.productsClone.products);

    // if (!this.productsClone.products) {
    //   this.displayedData();
    // } else {
    //   this.productsDisplayed = this.product.subscribe(
    //     (data:products)=> {
    //       this.product.next({
    //         total:(data.products.filter((el)=> {el.price >= 20 && el.price <= 50})).length,
    //         skip:0,
    //         limit:0,
    //         products:data.products.filter((el)=> {el.price >= 20 && el.price <= 50})})
    //     }
    //   )
    // }
  }

  AllProductabove50() {
    // debugger;
    // console.log(!this.productsClone.products);
    // if (!this.productsClone.products) {
    //   this.displayedData();
    // } else {
    //   this.productsDisplayed = this.product.subscribe(
    //     (data:products)=> {
    //       this.product.next({
    //         total:(data.products.filter((el)=> {el.price > 50})).length,
    //         skip:0,
    //         limit:0,
    //         products:data.products.filter((el)=> {el.price > 50})})
    //     }
    //   )
    // }
  }
}
