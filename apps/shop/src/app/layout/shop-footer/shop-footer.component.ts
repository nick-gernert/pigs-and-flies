import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-shop-footer',
  templateUrl: './shop-footer.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopFooterComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [ShopFooterComponent],
  exports: [ShopFooterComponent],
})
export class ShopFooterComponentModule {}
