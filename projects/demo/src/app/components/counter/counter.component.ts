import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'isdi-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter = 0;

  handleCount(value: number) {
    this.counter = this.counter + value;
  }
}
