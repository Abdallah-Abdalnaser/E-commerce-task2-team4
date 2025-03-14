import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../core/interfaces/singleProduct.model';
import { ProductServiceService } from '../../../../core/services/product-service.service';
import { Subscription } from 'rxjs';
import { products } from '../../../../core/interfaces/products.model';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-resultsearch',
  standalone: false,
  templateUrl: './resultsearch.component.html',
  styleUrl: './resultsearch.component.css'
})
export class ResultsearchComponent implements OnInit,OnDestroy {
  filteredProducts: products ={
    limit:0,
    products:[],
    skip:0,
    total:0,
  };
  data!:Subscription;
  counter!:number;


  constructor (private ProductServiceService:ProductServiceService ,private CartService:CartService) {}

  ngOnInit(): void {
    this.data= this.ProductServiceService.product.subscribe(
      (data:products)=> {
        this.filteredProducts = data;
      }
    )
  }

  addCart(product:Product) {
    this.CartService.AddCart(product);
  }

  ngOnDestroy(): void {
    this.data.unsubscribe()
  }
}
