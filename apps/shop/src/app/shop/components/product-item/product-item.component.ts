import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponentModule, CardComponentModule } from '../../../UI';
import { Product } from '../../../models/product';

@Component({
  selector: 'pf-product-item',
  templateUrl: './product-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  addToCart!: (product: Product) => void;

  get detailsLink(): string {
    return `/details/${this.product.id}`;
  }

  get productPrice(): string {
    return `$${this.product.price}`;
  }

  navigateToDetails(): void {
    this.router.navigate([this.detailsLink]);
  }

  handleAddToCart(e: Event): void {
    e.stopPropagation();

    this.addToCart(this.product);
  }
}

@NgModule({
  imports: [ButtonComponentModule, CardComponentModule, CommonModule],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
})
export class ProductItemComponentModule {}
