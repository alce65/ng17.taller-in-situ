/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { Task } from '../entities/task';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksApiRepoService implements Repo<Task> {
  // http = inject(HttpClient);
  apiUrl = environment.apiTasksUrl;

  constructor(private http: HttpClient) {}
  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  add(newItem: Partial<Task>): Observable<Task[]> {
    newItem.isComplete = false;
    return this.http
      .post<Task>(this.apiUrl, newItem)
      .pipe(map((value) => [value]));
  }
  update(id: string, updatedItem: Partial<Task>): Observable<Task[]> {
    const url = this.apiUrl + '/' + id;
    return this.http
      .patch<Task>(url, updatedItem)
      .pipe(map((value) => [value]));
  }
  delete(id: string): Observable<Task[]> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<void>(url).pipe(map(() => []));
  }
}
