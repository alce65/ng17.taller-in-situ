import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-greeting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  user = '';

  // handleInput(event: Event) {
  //   this.user = (event.target as HTMLInputElement).value;
  // }
}
