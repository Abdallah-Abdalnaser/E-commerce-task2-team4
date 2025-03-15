import { Component, Input , OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../../core/interfaces/singleProduct.model';
import { ProductServiceService } from '../../../../core/services/product-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { products } from '../../../../core/interfaces/products.model';

@Component({
  selector: 'app-productsfilteration',
  standalone: false,
  templateUrl: './productsfilteration.component.html',
  styleUrl: './productsfilteration.component.css'
})

export class ProductsfilterationComponent implements OnInit,OnDestroy{
  rating=4;
  categories:string[] = [];
  categoriesSubscription!:Subscription;
  productBycategoriesSubscription!:Subscription;


  constructor(private productService: ProductServiceService,private router: Router) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.productService.getAllCategoriesOfProducts().subscribe(
      (data:string[])=> {
        this.categories = data;
      }
    )
  }

  filterProducts(CategoryName:HTMLInputElement): void {
    this.productBycategoriesSubscription = this.productService.getProductsByCategoryName(CategoryName.value).subscribe(
      (data:products)=> {
        this.productService.product.next(data);
      }
    )
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
