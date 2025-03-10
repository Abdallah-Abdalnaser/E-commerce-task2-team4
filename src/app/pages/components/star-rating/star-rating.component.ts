import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  private _rating!: number;

  @Input()
  set rating(value: number) {
    // Ensure the rating is clamped between 0 and 5
    this._rating = Math.max(0, Math.min(5, value || 0));
  }

  get rating(): number {
    return this._rating;
  }

  get stars() {
    // Calculate filled stars
    return Array(Math.floor(this.rating)).fill(0);
  }

  get emptyStars() {
    // Calculate the number of empty stars
    return Array(5 - Math.ceil(this.rating)).fill(0);
  }
}
