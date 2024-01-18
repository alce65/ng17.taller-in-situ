import { Observable } from 'rxjs';

export interface Repo<T extends { id: string }> {
  getAll(): Observable<T[]>;
  add(newItem: Partial<T>): Observable<T[]>;
  update(id: T['id'], updatedItem: Partial<T>): Observable<T[]>;
  delete(id: T['id']): Observable<T[]>;
}
