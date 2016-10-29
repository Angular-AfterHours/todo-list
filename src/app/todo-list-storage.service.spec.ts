/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoListStorageService } from './todo-list-storage.service';

describe('Service: TodoListStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListStorageService]
    });
  });

  it('should ...', inject([TodoListStorageService], (service: TodoListStorageService) => {
    expect(service).toBeTruthy();
  }));
});
