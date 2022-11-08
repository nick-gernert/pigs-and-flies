import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../models/cart-item';
import { CartCardComponentModule } from '../cart-card/cart-card.component';

@Component({
  selector: 'pf-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent {
  @Input() items!: CartItem[] | null;


  get totalPrice(): number {
    if (this.items === null) {
      return 0;
    }

    return this.items.reduce(
      (accumulator, value): number => accumulator + value.product.price * value.quantity,
      0,
    );
  }
}

@NgModule({
  imports: [CommonModule, CartCardComponentModule],
  declarations: [CartItemListComponent],
  exports: [CartItemListComponent],
})
export class CartItemListComponentModule {}
