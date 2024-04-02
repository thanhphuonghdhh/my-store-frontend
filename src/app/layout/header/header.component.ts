import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzGridModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
