import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponentModule, CardComponentModule } from '../../../UI';
import { CartItem } from '../../../models/cart-item';
import { Product } from '../../../models/product';
import { CartItemsFacade } from '../../+state/cart-items.facade';

@Component({
  selector: 'pf-cart-card',
  templateUrl: './cart-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent {
  @Input()
  item!: CartItem;

  constructor(private cartFacade: CartItemsFacade) {}

  get product(): Product {
    return this.item.product;
  }

  handleIncrement(): void {
    console.log('calling this?');
    this.cartFacade.addToCart(this.product);
  }

  handleDecrement(): void {
    this.cartFacade.removeFromCart(this.product);
  }
}

@NgModule({
  imports: [CommonModule, CounterComponentModule, CardComponentModule],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardComponentModule {}
