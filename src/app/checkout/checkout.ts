import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  cartService = inject(CartService);
  cartQuantity: number = 0;

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      this.cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
  }
}
