import { Component } from '@angular/core';

import { GreetingComponent } from '../../components/greeting/greeting.component';
import { CoreComponent } from 'core';
import { DatePipe } from '@angular/common';
import { ClickersComponent } from '../../components/clickers/clickers.component';

@Component({
  standalone: true,
  imports: [ClickersComponent, GreetingComponent, CoreComponent, DatePipe],
  template: `
    <h2>Home page</h2>
    <isdi-clickers />
    <isdi-greeting />
    <isdi-core />
    {{ toDay | date : 'fullDate' }}
  `,
  styles: ``,
})
export default class HomeComponent {
  toDay = new Date();
}
