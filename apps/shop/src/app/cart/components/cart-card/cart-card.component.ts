import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-cart-card',
  templateUrl: './cart-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [CartCardComponent],
  exports: [CartCardComponent],
})
export class CartCardComponentModule {}
