import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgModule,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductItemComponentModule } from '../product-item/product-item.component';
import { Product } from '../../../models/product';

@Component({
  selector: 'pf-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  @Input() products: Product[] | null = [];

  searchText = '';

  get displayProducts(): Product[] {
    if (!this.products) {
      return [];
    }

    return this.products.filter((val) =>
      val.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  clearSearch(): void {
    this.searchText = '';
    this.searchInput.nativeElement.focus();
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, ProductItemComponentModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
