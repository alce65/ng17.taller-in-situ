import { Component, OnInit } from '@angular/core';
import { Task } from '../../entities/task';
import { getTasks } from './tasks.mock';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'isdi-todo',
  standalone: true,
  imports: [TaskAddComponent, TaskCardComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  title = '';
  addError = '';
  editMode: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    getTasks().then((tasks) => {
      this.tasks = tasks;
      this.tasks.forEach((item) => (this.editMode[item.id] = false));
    });
  }

  addTask(taskData: Omit<Task, 'id' | 'isComplete'>) {
    const task: Task = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...taskData,
    };
    this.tasks = [...this.tasks, task];
  }

  updateTask(updatedItem: Task) {
    this.tasks = this.tasks.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  }

  deleteTask(deletedItemId: Task['id']) {
    this.tasks = this.tasks.filter((item) => item.id !== deletedItemId);
  }
}
