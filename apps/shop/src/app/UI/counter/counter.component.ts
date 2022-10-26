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
  selector: 'pf-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  @Input() count = 0;

  @Output() increment = new EventEmitter<void>();

  @Output() decrement = new EventEmitter<void>();

  handleIncrement(): void {
    this.increment.emit();
  }

  handleDecrement(): void {
    this.decrement.emit();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterComponentModule {}
