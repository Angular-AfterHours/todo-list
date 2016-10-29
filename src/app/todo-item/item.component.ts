import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <input type="checkbox">
    
    {{ itemTitle }}
    
    <button>
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
