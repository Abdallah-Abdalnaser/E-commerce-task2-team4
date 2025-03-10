import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-star',
  standalone: false,
  templateUrl: './basic-star.component.html',
  styleUrl: './basic-star.component.css'
})
export class BasicStarComponent {
@Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

}
