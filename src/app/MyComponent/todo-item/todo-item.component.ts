import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todos';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() 'todo':Todo;
  @Input() 'i':number;
  @Output() todoDelete :EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox :EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo : Todo){
    console.log("Okay, Hola am a thaale thaale loo");
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo : Todo)
  {
    this.todoCheckbox.emit(todo);

  }
}
