import { Injectable } from '@angular/core';
import { Product } from '../interfaces/singleProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {}

  AddCart(product: Product) {
    let cart: Product[] = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart')!);
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  numberOfProductInCart(): number {
    if (localStorage.getItem('cart') === null) {
      return 0;
    }
    return JSON.parse(localStorage.getItem('cart')!).length;
  }

  getCartItems(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
}
