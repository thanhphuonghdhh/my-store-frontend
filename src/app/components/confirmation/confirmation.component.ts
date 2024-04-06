import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { UserInfo } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NzIconModule, NzGridModule, NzButtonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  user: UserInfo;
  total: number;

  constructor(private cartService: CartService, private router: Router) {
    this.user = cartService.getUser();
    this.total = cartService.getTotalCost();
  }

  backToHomepage() {
    this.cartService.emptyCart();
    this.router.navigate(['']);
  }
}
