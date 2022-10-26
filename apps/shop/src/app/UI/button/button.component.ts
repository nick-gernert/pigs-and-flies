import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-button',
  templateUrl: './button.component.html',
  styles: [':host { width: 100% }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type = '';

  @Input() label = '';

  @Input() colorClass = '';

  @Input() hoverClass = '';

  @Output() pfClick = new EventEmitter<Event>();

  handleClick(e: Event): void {
    this.pfClick.emit(e);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}
