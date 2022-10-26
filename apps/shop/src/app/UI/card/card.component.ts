import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardComponentModule {}
