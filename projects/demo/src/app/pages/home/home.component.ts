import { Component } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';
import { GreetingComponent } from '../../components/greeting/greeting.component';
import { CoreComponent } from 'core';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [CounterComponent, GreetingComponent, CoreComponent, DatePipe],
  template: `
    <h2>Home page</h2>
    <isdi-counter />
    <isdi-counter />
    <isdi-greeting />
    <isdi-core />
    {{ toDay | date : 'fullDate' }}
  `,
  styles: ``,
})
export default class HomeComponent {
  toDay = new Date();
}
