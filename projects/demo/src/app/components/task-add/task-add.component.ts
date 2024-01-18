import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../entities/task';

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
  @Output() addTaskEvent = new EventEmitter<Omit<Task, 'id' | 'isComplete'>>();

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
    this.addTaskEvent.next(newTaskData);
  }
}
