import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../core/interfaces/singleProduct.model';
import { ProductServiceService } from '../../../../core/services/product-service.service';
import { Subscription } from 'rxjs';
import { products } from '../../../../core/interfaces/products.model';

@Component({
  selector: 'app-productsfilteration',
  standalone: false,
  templateUrl: './productsfilteration.component.html',
  styleUrls: ['./productsfilteration.component.css']
})
export class ProductsfilterationComponent implements OnInit, OnDestroy {
  rating = 4;
  categories: string[] = [];
  categoriesSubscription!: Subscription;
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.productService.getAllCategoriesOfProducts().subscribe(
      (data: string[]) => {
        this.categories = data;
      }
    );

    this.productService.getAllProducts().subscribe((data: products) => {
      this.allProducts = data.products;
      this.filteredProducts = this.allProducts;
      this.productService.product.next(data);
    });
  }

  filterProducts(categoryName: HTMLInputElement): void {
    this.productService.getProductsByCategoryName(categoryName.value).subscribe(
      (data: products) => {
        this.allProducts = data.products;
        this.filteredProducts = this.allProducts;
        this.productService.product.next(data);
      }
    );
  }

  filterProductsPrice(priceRange: string): void {
    console.log('Filtering products by price range:', priceRange);
    this.filteredProducts = this.productService.filterProductsByPriceRange(this.allProducts, priceRange);

    this.productService.product.next({
      limit: this.filteredProducts.length,
      products: this.filteredProducts,
      skip: 0,
      total: this.filteredProducts.length,
    });
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
