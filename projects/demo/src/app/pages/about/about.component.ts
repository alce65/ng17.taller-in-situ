import { Component } from '@angular/core';
import { SampleComponent } from '../../components/sample/sample.component';

@Component({
  standalone: true,
  imports: [SampleComponent],
  template: `
    <h2>Acerca de nosotros</h2>
    <isdi-sample />
  `,
  styles: ``,
})
export default class AboutComponent {}
