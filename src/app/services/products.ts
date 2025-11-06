import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getProducts() {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get<Array<Products>>(apiUrl);
  }
}
