import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFacade } from '../../+state/products.facade';
import { AdminFormComponentModule } from '../../components/admin-form/admin-form.component';
import { AdminProductListComponentModule } from '../../components/admin-product-list/admin-product-list.component';

@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  products$ = this.productsFacade.allProducts$;

  selectedProduct$ = this.productsFacade.selectedProduct$;

  selectedId$ = this.productsFacade.selectedId$;

  constructor(private readonly productsFacade: ProductsFacade) {}

  ngOnInit(): void {
    this.productsFacade.init();
  }
}

@NgModule({
  imports: [
    CommonModule,
    AdminFormComponentModule,
    AdminProductListComponentModule,
  ],
  declarations: [AdminComponent],
  exports: [AdminComponent],
})
export class AdminComponentModule {}
