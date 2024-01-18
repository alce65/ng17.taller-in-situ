import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../entities/task';
import { TasksStoreService } from '../../store/tasks.store.service';

@Component({
  selector: 'isdi-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss',
})
export class TaskAddComponent {
  title = '';
  addError = '';
  @ViewChild('refDetails') refDetails!: ElementRef;
  // @Output() addTaskEvent = new EventEmitter<Omit<Task, 'id' | 'isComplete'>>();

  store = inject(TasksStoreService);
  handleClickAdd() {
    if (!this.title) {
      this.addError = 'Invalid data';
      return;
    }
    const newTaskData: Omit<Task, 'id' | 'isComplete'> = {
      title: this.title,
    };
    this.title = '';
    this.refDetails.nativeElement.removeAttribute('open');
    //this.addTaskEvent.next(newTaskData);
    this.store.addTask(newTaskData);
  }
}
