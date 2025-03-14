import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../interfaces/singleProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  AddCart(product: Product) {
    let cart: Product[] = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart')!);
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }


  numberOfProductInCart():number {
    return JSON.parse(localStorage.getItem('cart')!).length;
  }
}
