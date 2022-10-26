import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-card-title',
  templateUrl: './card-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [CardTitleComponent],
  exports: [CardTitleComponent],
})
export class CardTitleComponentModule {}
