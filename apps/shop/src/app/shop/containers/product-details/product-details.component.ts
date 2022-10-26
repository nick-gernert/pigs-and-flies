import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CardComponentModule,
  ButtonComponentModule,
  CardTitleComponentModule,
} from '../../../UI';
import { Product } from '../../../models/product';

@Component({
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor() {}

  ngOnInit(): void {}

  // @Prop() product!: ShopProduct;

  // @shop.Action
  // addToCart!: (product: ShopProduct) => void;

  handleAddToCart(e: Event): void {
    e.stopPropagation();

    // this.addToCart(this.product);
  }
}

@NgModule({
  imports: [
    CommonModule,
    CardComponentModule,
    ButtonComponentModule,
    CardTitleComponentModule,
  ],
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsComponentModule {}
