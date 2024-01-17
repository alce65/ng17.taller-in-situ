import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
