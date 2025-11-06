import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cartItem';
import { Products } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartSubject.next(JSON.parse(storedCart));
    }
  }

  private saveCart(cartItems: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  addToCart(product: Products) {
    const currentCart = this.cartSubject.getValue();

    const existingItem = currentCart.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentCart.push({ product, quantity: 1 });
    }

    this.cartSubject.next(currentCart);

    this.saveCart(currentCart);
  }

  removeFromCart(productId: number) {
    // to implement next
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.cartSubject.getValue();

    const itemToUpdate = currentCart.find((item) => item.product.id === productId);

    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
    }

    this.cartSubject.next(currentCart);
    this.saveCart(currentCart);
  }
}
