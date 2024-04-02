import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NzSelectModule, NzButtonModule, NzGridModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  selectedOption: number = 1;
  options: number[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.options.push(i);
    }
  }
}
