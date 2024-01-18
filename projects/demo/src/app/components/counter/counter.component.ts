import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'isdi-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter = 0;
  @Output() clickEvent: EventEmitter<number> = new EventEmitter();

  handleCount(value: number) {
    this.counter = this.counter + value;
    this.clickEvent.next(value);
  }
}
