import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { ProductListComponentModule } from '../../components/product-list/product-list.component';
import { Product } from '../../../models/product';
import { ProductsFacade } from '../../+state/products.facade';

@Component({
  templateUrl: './shop.component.html',
  styles: [':host { display: block; }'],
})
export class ShopComponent implements OnInit {
  products: Observable<Product[]> = this.productsFacade.allProducts$;

  constructor(private readonly productsFacade: ProductsFacade) {}

  ngOnInit(): void {
    this.productsFacade.init();
  }
}

@NgModule({
  imports: [CommonModule, ProductListComponentModule],
  declarations: [ShopComponent],
  exports: [ShopComponent],
})
export class ShopComponentModule {}
