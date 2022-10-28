import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-shop-header',
  templateUrl: './shop-header.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopHeaderComponent {
  totalItemsInCart = 3;

  constructor() {}
}

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShopHeaderComponent],
  exports: [ShopHeaderComponent],
})
export class ShopHeaderComponentModule {}
