import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [
    {
      id: 1,
      name: 'Book',
      price: 9.99,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'You can read it!',
      quantity: 2
    },
    {
      id: 2,
      name: 'Headphones',
      price: 249.99,
      url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Listen to stuff!',
      quantity: 10
    },
  ];
  constructor() {}

  getCart() {
    return this.cart;
  }

  addToCart(product: Product, quantity: number) {
    const existProduct = this.cart.find((p) => (p.id = product.id));

    if (existProduct) existProduct.quantity = quantity;
    else {
      product.quantity = quantity;
      this.cart.push(product);
    }
  }
}
