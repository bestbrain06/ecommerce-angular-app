import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../services/products';
import { catchError } from 'rxjs';
import { Products } from '../model/product';
import { CartItem } from '../model/cartItem';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  productsService = inject(ProductService);
  productItems = signal<Array<Products>>([]);

  cartService = inject(CartService);
  cartItems: CartItem[] = [];
  cartQuantity: number = 0;

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(
        catchError((err) => {
          throw new err();
          console.log(err);
        })
      )
      .subscribe((products) => {
        this.productItems.set(products);
      });

    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
      this.cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
  }
}
