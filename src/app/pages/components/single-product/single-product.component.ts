import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces/singleProduct.model';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../../core/services/product-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-single-product',
  standalone: false,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {

products:any[]=[];
product: Product | undefined;
ratingPercentages: number[] = [];
  errorMessage: string | undefined;
  selectedImage: string = '';
  selectedThumbnail: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id) || id <= 0) {
      this.errorMessage = 'Invalid product ID.';
      return;
    }

    this.productService.getProductById(id).subscribe(
      (data) => {
        this.product = data;
        if (this.product && this.product.reviews) {
          this.ratingPercentages = this.calculateRatingPercentages(this.product.reviews);
        }
        this.selectedImage = this.product.images.length > 0 ? this.product.images[0] : this.product.thumbnail;
        this.selectedThumbnail = this.product.images[0];
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = `Error fetching product: ${error.message}`;
        console.error('Error fetching product:', error);
      }
    );
  }
  calculateRatingPercentages(reviews: { rating: number }[]) {
    const totalReviews = reviews.length;
    const ratingCounts = [0, 0, 0, 0, 0];

    reviews.forEach(review => {
      if (review.rating >= 1 && review.rating <= 5) {
        ratingCounts[review.rating - 1]++;
      }
    });

    return ratingCounts.map(count => (totalReviews > 0 ? (count / totalReviews) * 100 : 0));
  }

  changeImage(image: string) {
    this.selectedImage = image;
    this.selectedThumbnail = image;

  }
}
