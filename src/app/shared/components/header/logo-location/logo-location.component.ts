import { Component, DoCheck } from '@angular/core';
import { faAngleRight, faLocationDot, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-logo-location',
  standalone: false,
  templateUrl: './logo-location.component.html',
  styleUrl: './logo-location.component.css'
})
export class LogoLocationComponent implements DoCheck {
  faLocationDot:IconDefinition = faLocationDot;
  faUser:IconDefinition = faUser;
  faAngleRight:IconDefinition = faAngleRight;
  counter:number = 0;

  constructor(private CartService:CartService) {}

  ngDoCheck(): void {
    this.counter = this.CartService.numberOfProductInCart();
  }
}
