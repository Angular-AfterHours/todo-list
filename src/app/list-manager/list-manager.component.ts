import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
    <h1>
      {{title}}
    </h1>
    
    <todo-input (submit)="addItem($event)"></todo-input>
    
    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [itemTitle]="item.title"></todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  private title:string = 'My Todos';

  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(title:string) {
    this.todoList.push({ title });
  }
}
