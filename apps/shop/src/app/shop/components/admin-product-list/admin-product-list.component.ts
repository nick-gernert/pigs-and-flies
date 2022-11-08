import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { AdminProductItemComponentModule } from '../admin-product-item/admin-product-item.component';

@Component({
  selector: 'pf-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminProductListComponent {
  @Input() products!: Product[] | null;

  @Input() selectedId: string | number | null | undefined;

  trackByFn(index: number, product: Product): string {
    return product.id;
  }
}

@NgModule({
  imports: [CommonModule, AdminProductItemComponentModule],
  declarations: [AdminProductListComponent],
  exports: [AdminProductListComponent],
})
export class AdminProductListComponentModule {}
