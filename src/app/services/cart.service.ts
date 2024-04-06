import { Injectable } from '@angular/core';
import { Product, UserInfo } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  user: UserInfo = {
    address: '',
    creditNumber: '',
    userName: ''
  }

  constructor() {
    const tmpCart = localStorage.getItem('cart');
    if (tmpCart) this.cart = JSON.parse(tmpCart);
  }

  getCart() {
    return this.cart;
  }

  getTotalCost() {
    let total = 0;
    this.cart.forEach((product) => {
      if (product.quantity) total += product.price * product.quantity;
    });
    
    return parseFloat(total.toFixed(2));
  }

  removeProductInCart(product: Product) {
    this.cart = this.cart.filter((item) => product.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  updateCart(product: Product, quantity: number) {
    const existProduct = this.cart.find((p) => p.id === product.id);
    if (existProduct) existProduct.quantity = quantity;
    else {
      product.quantity = quantity;
      this.cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  emptyCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  updateUser(user: UserInfo) {
    this.user = user;
  }

  checkout(user: UserInfo) {
    this.updateUser(user);
  }

  getUser() {
    return this.user;
  }
}
