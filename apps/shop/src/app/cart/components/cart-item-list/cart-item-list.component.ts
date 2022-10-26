import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [CartItemListComponent],
  exports: [CartItemListComponent],
})
export class CartItemListComponentModule {}
