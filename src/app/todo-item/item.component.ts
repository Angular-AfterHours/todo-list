import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <input type="checkbox">
    
    <span [hidden]="editing" 
          (click)="editItem()">{{ item.title }}</span>
    
    <todo-input [hidden]="!editing"
                [title]="item.title"
                (submit)="changeItemTitle($event)" (cancel)="cancelEdit($event)">               
    </todo-input>
    
    <button (click)="removeItem()">
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  @Output() changeTitle:EventEmitter<any> = new EventEmitter();

  private editing:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  editItem() {
    this.editing = true;
  }

  changeItemTitle(newTitle) {
    this.editing = false;
    this.changeTitle.emit({
      item: this.item,
      newTitle
    });
  }

  cancelEdit() {
    this.editing = false;
  }

}
