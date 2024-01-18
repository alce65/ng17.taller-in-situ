import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../interfaces/menu.option';

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  options: MenuOption[] = [
    { path: 'home', label: 'Home' },
    { path: 'todo', label: 'Todo List' },
    { path: 'about', label: 'Acerca de' },
  ];
}
