import { Component } from '@angular/core';
import { Product } from '../../models/models';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [NzGridModule, CommonModule, NzSelectModule, NzButtonModule, FormsModule, RouterModule, NzIconModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent {
  product: Product | undefined;
  selectedOption: number = 1;
  options: number[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.options.push(i);
    }
    this.activatedRoute.params.subscribe((param: Params) => {
      const id: Number = parseInt(param['id']);
      this.productService.getProductList().subscribe((res: Product[]) => {
        res.forEach((item) => {
          if (item.id === id) {
            this.product = item;
          }
        });
      });
    });
  }

  updateCart(product: Product | undefined) {
    if (product) {
      this.cartService.updateCart(product, this.selectedOption)
      alert('Added to cart!')
    }
  }
}
