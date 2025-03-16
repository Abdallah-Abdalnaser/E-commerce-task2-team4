import { Component , DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-userinfo',
  standalone: false,
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit , DoCheck {
  counter:number=0;
  userName: string | null = null;
  constructor(private CartService:CartService,private userService: UserService) {}

  ngOnInit(): void {
    this.userName = this.userService.getUserName();
  }

  ngDoCheck(): void {
    this.counter = this.CartService.numberOfProductInCart();
  }
logout() {
  localStorage.removeItem('registeredUser');
  this.userName = null; 
}
}
