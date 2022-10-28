import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {
  CardComponentModule,
  ButtonComponentModule,
  CardTitleComponentModule,
} from '../../../UI';
import { ProductsFacade } from '../../+state/products.facade';

import { Product } from '../../../models/product';

@Component({
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product$ = this.products.selectedProduct$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly products: ProductsFacade
  ) {}

  ngOnInit(): void {
    this.products.init();
    const productId = this.route.snapshot.paramMap.get('id');
    if (!productId) {
      return;
    }
    this.products.selectProduct(productId);
  }

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
