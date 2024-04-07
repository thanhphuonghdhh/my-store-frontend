import { Component } from '@angular/core';
import { Product } from '../../models/models';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, NzGridModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((res) => {
      this.products = res;
    });
  }

  showAddedAlert(product: Product) {
    alert('Added ' + product.name + ' to cart!');
  }
}
