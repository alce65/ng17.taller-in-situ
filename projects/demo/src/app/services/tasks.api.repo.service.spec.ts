import { TestBed } from '@angular/core/testing';

import { TasksApiRepoService } from './tasks.api.repo.service';

describe('TasksApiRepoService', () => {
  let service: TasksApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
