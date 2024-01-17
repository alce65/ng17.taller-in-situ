import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'isdi-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <isdi-header>
      <ng-content .menu></ng-content>
    </isdi-header>
    <ng-content .main></ng-content>
    <isdi-footer />
  `,
  styles: ``,
})
export class LayoutComponent {}
