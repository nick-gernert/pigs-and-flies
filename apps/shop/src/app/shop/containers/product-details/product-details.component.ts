import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {
  CardComponentModule,
  ButtonComponentModule,
  CardTitleComponentModule,
} from '../../../UI';
import { ProductsFacade } from '../../+state/products.facade';

import { Product } from '../../../models/product';
import { CartItemsFacade } from '../../../cart/+state/cart-items.facade';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product$ = this.products.selectedProduct$;

  loaded$ = this.products.loaded$;

  sub$!: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly products: ProductsFacade,
    private readonly cart: CartItemsFacade,
  ) {}

  ngOnInit(): void {
    this.sub$ = this.loaded$.subscribe((loaded) => {
      if (!loaded) {
        this.products.init();
      }
    })
    const productId = this.route.snapshot.paramMap.get('id');
    if (!productId) {
      return;
    }
    this.products.selectProduct(productId);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  handleAddToCart(product: Product): void {
    this.cart.addToCart(product);
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
