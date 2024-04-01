import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent {
  @Input() product!: Product;
}
