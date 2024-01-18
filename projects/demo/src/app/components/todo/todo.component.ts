import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../entities/task';
import { getTasks } from './tasks.mock';

@Component({
  selector: 'isdi-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  title = '';
  addError = '';
  editMode: { [key: string]: boolean } = {};
  @ViewChild('refDetails') refDetails!: ElementRef;
  @ViewChild('refLista') refLista!: ElementRef;

  ngOnInit(): void {
    getTasks().then((tasks) => {
      this.tasks = tasks;
      this.tasks.forEach((item) => (this.editMode[item.id] = false));
    });
  }

  handleAddTask() {
    if (!this.title) {
      this.addError = 'Invalid data';
      return;
    }
    const newTaskData: Omit<Task, 'id' | 'isComplete'> = {
      title: this.title,
    };
    this.title = '';
    this.addTask(newTaskData);
    this.refDetails.nativeElement.removeAttribute('open');
  }

  handleChangeTasks(item: Task) {
    item.isComplete = !item.isComplete;
    this.updateTask(item);
  }

  handleEdit(item: Task) {
    this.editMode[item.id] = true;
    this.refLista.nativeElement.children[
      item.id
    ].children[0].children[1].focus();
  }

  handleSave(item: Task) {
    this.editMode[item.id] = false;
    this.updateTask(item);
  }

  handleDeleteTask(item: Task) {
    this.deleteTask(item);
    delete this.editMode[item.id];
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

  deleteTask(deletedItem: Task) {
    this.tasks = this.tasks.filter((item) => item.id !== deletedItem.id);
  }
}
