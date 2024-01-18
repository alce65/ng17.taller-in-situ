import { Component, OnInit, inject } from '@angular/core';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TasksStoreService } from '../../store/tasks.store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'isdi-todo',
  standalone: true,
  imports: [TaskAddComponent, TaskCardComponent, AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  //  tasks: Task[] = [];
  store = inject(TasksStoreService);

  // constructor() {
  // this.store.getState().data.subscribe((data) => (this.tasks = data));
  // }

  ngOnInit(): void {
    this.store.loadTasks();
  }
}
