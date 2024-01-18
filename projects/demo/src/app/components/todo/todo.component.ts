import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../../entities/task';

import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TasksApiRepoService } from '../../services/tasks.api.repo.service';

@Component({
  selector: 'isdi-todo',
  standalone: true,
  imports: [TaskAddComponent, TaskCardComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  repo = inject(TasksApiRepoService);

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.repo.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(taskData: Omit<Task, 'id' | 'isComplete'>) {
    this.repo
      .add(taskData)
      .subscribe((tasks) => (this.tasks = [...this.tasks, ...tasks]));
  }

  updateTask(updatedItem: Task) {
    this.repo
      .update(updatedItem.id, updatedItem)
      .subscribe(
        ([task]) =>
          (this.tasks = this.tasks.map((item) =>
            item.id === task.id ? task : item
          ))
      );
  }

  deleteTask(deletedItemId: Task['id']) {
    this.repo
      .delete(deletedItemId)
      .subscribe(
        () =>
          (this.tasks = this.tasks.filter((item) => item.id !== deletedItemId))
      );
  }
}
