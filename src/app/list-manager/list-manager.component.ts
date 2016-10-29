import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <h1>
      {{title}}
    </h1>
    
    <todo-input (submit)="addItem($event)"></todo-input>
    
    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [item]="item" (remove)="removeItem($event)"></todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  private title:string = 'My Todos';
  private todoList;

  constructor(private todoListService:TodoListService) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title:string) {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
