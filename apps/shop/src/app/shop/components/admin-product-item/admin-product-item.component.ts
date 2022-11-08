import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { ProductsFacade } from '../../+state/products.facade';
import { CardComponentModule } from '../../../UI';

@Component({
  selector: 'pf-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminProductItemComponent {
  @Input() product!: Product;

  @Input() selectedId!: string | number | undefined;

  constructor(private productsFacade: ProductsFacade) {}

  selectProduct(): void {
    this.productsFacade.selectProduct(this.product.id);
  }
}

@NgModule({
  imports: [CommonModule, CardComponentModule],
  declarations: [AdminProductItemComponent],
  exports: [AdminProductItemComponent],
})
export class AdminProductItemComponentModule {}
