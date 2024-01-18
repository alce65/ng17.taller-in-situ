import { Component } from '@angular/core';

@Component({
  selector: 'isdi-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <address>ISDI Coders</address>
    </footer>
  `,
  styles: `
    :host {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 10vh;
    }

    footer {
      display: flex;
      justify-content: center;
    }

    .p {
      font-size: 0.5rem;
    }
`,
})
export class FooterComponent {}
