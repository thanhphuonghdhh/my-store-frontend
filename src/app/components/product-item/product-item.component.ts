import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NzSelectModule, NzButtonModule, NzGridModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
}
