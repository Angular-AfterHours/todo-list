import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input #inputElem 
           [value]="title"
           (keyup.enter)="changeTitle($event.target.value)">
           
    <button (click)="changeTitle(inputElem.value)">
      Save
    </button>
    
    {{ title }}
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private title: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

}
