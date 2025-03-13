import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-userinfo',
  standalone: false,
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {
  counter:number=0;
  constructor(private CartService:CartService) {}

  ngOnInit(): void {
    this.CartService.counter.subscribe(
      (data:number) => {
        console.log(data);
        this.counter =data;
      }
    )
  }
}
