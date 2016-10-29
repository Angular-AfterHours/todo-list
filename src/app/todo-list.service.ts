import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {
  
  constructor(private storage:TodoListStorageService) {
  }

  getTodoList() {
    return this.storage.get();
  }
  
  addItem(item) {
    return this.storage.put(item);
  }
  
}
