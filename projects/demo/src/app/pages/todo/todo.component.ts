import { Component } from '@angular/core';
import { TodoComponent } from '../../components/todo/todo.component';

@Component({
  standalone: true,
  imports: [TodoComponent],
  template: `
    <h2>ToDo list</h2>
    <isdi-todo />
  `,
  styles: ``,
})
export default class TodoPageComponent {}
