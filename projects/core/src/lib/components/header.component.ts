import { Component } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>Learning Angular</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
