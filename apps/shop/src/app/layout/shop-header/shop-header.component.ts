import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartItemsFacade } from '../../cart/+state/cart-items.facade';

@Component({
  selector: 'pf-shop-header',
  templateUrl: './shop-header.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopHeaderComponent {
  totalItemsInCart$ = this.cartFacade.totalItems$;

  constructor(private cartFacade: CartItemsFacade) {}
}

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShopHeaderComponent],
  exports: [ShopHeaderComponent],
})
export class ShopHeaderComponentModule {}
