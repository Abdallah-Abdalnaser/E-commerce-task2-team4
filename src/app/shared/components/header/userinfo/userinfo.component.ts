import { Component , DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-userinfo',
  standalone: false,
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit , DoCheck {
  counter:number=0;
  constructor(private CartService:CartService) {}

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.counter = this.CartService.numberOfProductInCart();
  }
}
