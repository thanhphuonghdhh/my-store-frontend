import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  constructor() { }

  getCart() {
    return this.cart;
  }

  

}
