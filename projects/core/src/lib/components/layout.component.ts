import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'isdi-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <isdi-header>
      <ng-content select=".menu"></ng-content>
    </isdi-header>
    <ng-content select=".main"></ng-content>
    <isdi-footer />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      justify-content: space-between;
    }
  `,
})
export class LayoutComponent {}
