import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../../entities/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-task-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() updateEvent = new EventEmitter<Task>();
  @Output() deleteEvent = new EventEmitter<Task['id']>();
  editMode = false;
  @ViewChild('refInput') refInput!: ElementRef;

  handleChangeTasks() {
    this.task.isComplete = !this.task.isComplete;
    this.updateEvent.next(this.task);
  }

  handleEdit() {
    this.editMode = true;
    this.refInput.nativeElement.focus();
  }

  handleSave() {
    this.editMode = false;
    this.updateEvent.next(this.task);
  }

  handleDeleteTask() {
    this.deleteEvent.next(this.task.id);
  }
}
