import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Task } from '../../entities/task';
import { FormsModule } from '@angular/forms';
import { TasksStoreService } from '../../store/tasks.store.service';

@Component({
  selector: 'isdi-task-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;
  // @Output() updateEvent = new EventEmitter<Task>();
  // @Output() deleteEvent = new EventEmitter<Task['id']>();
  editMode = false;
  @ViewChild('refInput') refInput!: ElementRef;

  store = inject(TasksStoreService);

  handleChangeTasks() {
    this.task.isComplete = !this.task.isComplete;
    // this.updateEvent.next(this.task);
    this.store.updateTask(this.task);
  }

  handleEdit() {
    this.editMode = true;
    this.refInput.nativeElement.focus();
  }

  handleSave() {
    this.editMode = false;
    // this.updateEvent.next(this.task);
    this.store.updateTask(this.task);
  }

  handleDeleteTask() {
    // this.deleteEvent.next(this.task.id);
    this.store.deleteTask(this.task.id);
  }
}
