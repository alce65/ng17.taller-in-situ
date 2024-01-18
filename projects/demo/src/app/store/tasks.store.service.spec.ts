import { TestBed } from '@angular/core/testing';

import { TasksStoreService } from './tasks.store.service';

describe('TasksStoreService', () => {
  let service: TasksStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
