import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <input type="checkbox">
    
    {{ item.title }}
    
    <button>
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() {
  }

  ngOnInit() {
  }

}
