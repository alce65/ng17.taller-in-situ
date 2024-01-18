import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../entities/task';
import { TasksApiRepoService } from '../services/tasks.api.repo.service';

export type TasksState = {
  data: Observable<Task[]>;
};

@Injectable({
  providedIn: 'root',
})
export class TasksStoreService {
  private tasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private repo: TasksApiRepoService) {}

  getState() {
    const state: TasksState = {
      data: this.tasks$.asObservable(),
    };
    return state;
  }

  loadTasks() {
    this.repo.getAll().subscribe((tasks) => {
      this.tasks$.next(tasks);
    });
  }

  addTask(taskData: Omit<Task, 'id' | 'isComplete'>) {
    this.repo.add(taskData).subscribe((tasks) => {
      this.tasks$.next([...this.tasks$.value, ...tasks]);
    });
  }

  updateTask(updatedItem: Task) {
    this.repo
      .update(updatedItem.id, updatedItem)
      .subscribe(([task]) =>
        this.tasks$.next(
          this.tasks$.value.map((item) => (item.id === task.id ? task : item))
        )
      );
  }

  deleteTask(deletedItemId: Task['id']) {
    this.repo
      .delete(deletedItemId)
      .subscribe(() =>
        this.tasks$.next(
          this.tasks$.value.filter((item) => item.id !== deletedItemId)
        )
      );
  }
}
