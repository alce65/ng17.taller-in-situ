import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from 'core';
import { MenuOption } from './interfaces/menu.option';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuOptions: MenuOption[] = [
    { path: 'home', label: 'Home' },
    { path: 'todo', label: 'Todo List' },
    { path: 'about', label: 'Acerca de' },
  ];
}
