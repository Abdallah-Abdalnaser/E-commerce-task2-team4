import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/singleProduct.model';
import { products } from '../interfaces/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product = new BehaviorSubject<products>({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  });

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getAllProducts(): Observable<products> {
    return this.http.get<products>(this.apiUrl);
  }

  getAllCategoriesOfProducts(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/category-list`);
  }

  getProductsByCategoryName(categoryName: string): Observable<products> {
    return this.http.get<products>(`${this.apiUrl}/category/${categoryName}`);
  }

  // New method to filter products by price range
  filterProductsByPriceRange(products: Product[], priceRange: string): Product[] {
    switch (priceRange) {
      case 'under-20':
        return products.filter(product => product.price < 20);
      case '20-50':
        return products.filter(product => product.price >= 20 && product.price <= 50);
      case '50-above':
        return products.filter(product => product.price > 50);
      default:
        return products; // Return all products if 'all' is selected
    }
  }

  
}
