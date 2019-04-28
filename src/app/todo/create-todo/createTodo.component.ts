import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { pendingListTodoComponent } from '../pending-list-todo/pendingListTodo.component';

@Component({
  selector: 'create-todo',
  templateUrl: './createTodo.component.html',
  styleUrls: ['./createTodo.component.scss']
})
export class createTodoComponent {
  newTodo: string = '';
  todoTitle: string ='';
  @Output() fetchPendingTodo = new EventEmitter<string[]>();
  @ViewChild(pendingListTodoComponent) pendingListTodo;

  addTodo() {
    this.todoTitle && (this.newTodo = this.todoTitle);
    this.todoTitle = '';
  }
  getCheckedTodoList() {
    this.fetchPendingTodo.emit(this.pendingListTodo.checkedTodos);
    this.pendingListTodo.removeCheckedTodosFromPendingList();
  }
}