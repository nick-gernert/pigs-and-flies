import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponentModule } from '../../components/product-list/product-list.component';
import { Product } from '../../../models/product';

@Component({
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  products: Product[] = [
    {
      id: 'tas;dlfjaksldjf',
      description: 'lorem ipsum',
      image: '/assets/img/butterfly.svg',
      name: 'Beautiful Butterfly',
      price: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, ProductListComponentModule],
  declarations: [ShopComponent],
  exports: [ShopComponent],
})
export class ShopComponentModule {}
