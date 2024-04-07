import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Product, UserInfo } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzInputNumberModule,
    NzButtonModule,
    FormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Product[] = [];
  user: UserInfo = {
    userName: '',
    address: '',
    creditNumber: '',
  };
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotalCost();
  }

  onQuantityChange(product: Product) {
    if (product.quantity === 0) {
      alert('Removed ' + product.name + ' from the cart!');
      this.cartService.removeProductInCart(product);
      this.cart = this.cartService.getCart();
    }
    if (product.quantity)
      this.cartService.updateCart(product, product.quantity);
    this.total = this.cartService.getTotalCost();
  }

  submitForm() {
    this.cartService.checkout(this.user);
    this.router.navigate(['confirmation']);
  }
}
