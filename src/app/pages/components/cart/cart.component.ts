import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/interfaces/singleProduct.model';
import { MatDialog } from '@angular/material/dialog';
import { OrderConfirmationDialogComponent } from '../../../shared/components/order-confirmation-dialog/order-confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Product[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService,private dialog: MatDialog, private router:Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems = JSON.parse(cart).map((item: Product) => {
        return {
          ...item,
          quantity: item.quantity || 1
        };
      });
      this.totalItems = this.cartItems.length;
      this.calculateTotalPrice();
    } else {
      this.cartItems = [];
      this.totalItems = 0;
      this.totalPrice = 0;
    }
  }

  updateQuantity(item: Product, quantity: number): void {
    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > item.stock) {
      quantity = item.stock;
    }
    item.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.totalItems = this.cartItems.length;
  }

  clearCart(): void {
    localStorage.removeItem('cart');
    this.loadCartItems();
  }
  orderNow(): void {
    const dialogRef = this.dialog.open(OrderConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.clearCart();
      this.navigateToproducts();
    });


  }

  navigateToproducts() {
    this.router.navigate(['/products']);
  }
}
