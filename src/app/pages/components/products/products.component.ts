import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../core/interfaces/Product';
import { ProductServiceService } from '../../../core/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected from styleUrl to styleUrls
})
export class ProductsComponent implements OnInit , OnChanges{
  @Input() products: Product[] = []; // Input property for products
  filteredProducts: Product[] = [];
  rating=4;
  categories = ['beauty', 'fragrances', 'furniture','groceries']; // Add your categories here
  selectedCategory = this.categories[0]; // Default selected category
  prices = ['All', 'under-20', '20-50','50-above']; // Add your categories here
  selectedPriceRange = this.prices[0];// Default selected price range

  constructor(private productService: ProductServiceService,private router: Router) {
    this.filteredProducts = this.products; // Initialize with all products
  }
  ngOnChanges(changes: SimpleChanges): void {
 // Check if products or selected filters have changed
  this.filterProducts();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.products = data.products;
      this.filterProducts();
      this.filterProductsprice();
    });
  }
  navigateToProduct(productId: number) {
    this.router.navigate(['/SingleProduct', productId]);
  }
  filterProducts(): void {
    let x=this.products;
    if(this.selectedCategory){
    x= x.filter(product => product.category === this.selectedCategory);
    }


    this.filteredProducts=x;
  }
  filterProductsprice():void{
    let x=this.products;
    switch (this.selectedPriceRange) {
      case 'under-20':
        x = x.filter(product => product.price < 20);
        break;
      case '20-50':
        x = x.filter(product => product.price >= 20 && product.price < 50);
        break;
      case '50-above':
       x = x.filter(product => product.price >= 50);
        break;
      default:
        x = x;
    }
    this.filteredProducts=x;
  }

}

