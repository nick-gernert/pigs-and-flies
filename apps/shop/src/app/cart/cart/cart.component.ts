import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemListComponentModule } from '../components/cart-item-list/cart-item-list.component';

@Component({
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, CartItemListComponentModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartComponentModule {}
