import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { pendingListTodoComponent } from '../pending-list-todo/pendingListTodo.component';

@Component({
  selector: 'create-todo',
  templateUrl: './createTodo.component.html',
  styleUrls: ['./createTodo.component.scss']
})
export class createTodoComponent {
  newTodo: string = '';
  @ViewChild(pendingListTodoComponent) pendingTodoComponent;
  @Output() fetchPendingTodo = new EventEmitter<string[]>();

  addTodo() {
    console.log('todo button clicked: ', this.newTodo);
    console.log('pendingListTodoComponent: ', this.pendingTodoComponent);
    if(this.newTodo && this.newTodo.trim()) {
      this.pendingTodoComponent.pendingTodoList.push(this.newTodo);
    }
  }
  getCheckedTodoList() {
    console.log(`checked pending todos: ${this.pendingTodoComponent.checkedTodos}`);
    this.fetchPendingTodo.emit(this.pendingTodoComponent.checkedTodos);
    this.pendingTodoComponent.removeCheckedTodosFromPendingList();
  }
}