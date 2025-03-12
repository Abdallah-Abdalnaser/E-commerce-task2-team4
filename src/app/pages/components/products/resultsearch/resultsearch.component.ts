import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../core/interfaces/singleProduct.model';
import { ProductServiceService } from '../../../../core/services/product-service.service';
import { Subscription } from 'rxjs';
import { products } from '../../../../core/interfaces/products.model';

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


  constructor (private ProductServiceService:ProductServiceService) {}

  ngOnInit(): void {
    this.data= this.ProductServiceService.product.subscribe(
      (data:products)=> {
        this.filteredProducts = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.data.unsubscribe()
  }
}
