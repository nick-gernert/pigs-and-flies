import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ButtonComponentModule, CardComponentModule } from '../../../UI';
import { Product } from '../../../models/product';

@Component({
  selector: 'pf-product-item',
  templateUrl: './product-item.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  addToCart!: (product: Product) => void;

  get productPrice(): string {
    return `$${this.product.price}`;
  }

  handleAddToCart(e: Event): void {
    e.stopPropagation();

    this.addToCart(this.product);
  }
}

@NgModule({
  imports: [
    ButtonComponentModule,
    CardComponentModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
})
export class ProductItemComponentModule {}
