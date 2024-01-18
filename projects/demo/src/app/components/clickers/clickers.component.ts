import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'isdi-clickers',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './clickers.component.html',
  styleUrl: './clickers.component.scss',
})
export class ClickersComponent {
  totalClicks = 0;
  totalValue = 0;

  handleClickEvent(value: number) {
    this.totalClicks += 1;
    this.totalValue += value;
  }
}
