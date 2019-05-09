import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { pendingListTodoComponent } from '../pending-list-todo/pendingListTodo.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'create-todo',
  templateUrl: './createTodo.component.html',
  styleUrls: ['./createTodo.component.scss']
})
export class createTodoComponent {
  newTodo: string = '';
  todoTitle: string ='';
  stars: number = 0;

  newPendingTodoListFromServer: string[];
  @Output() fetchPendingTodo = new EventEmitter<string[]>();
  @ViewChild(pendingListTodoComponent) pendingListTodo;

  constructor(private _todoService: TodoService){}

  addTodo() {
    if(this.stars > 5) {
      alert('stars can\'t be more than 5');
      return ;
    }
    this.todoTitle && (this.newTodo = this.todoTitle);
    this.todoTitle = '';
  }
  getCheckedTodoList() {
    this.fetchPendingTodo.emit(this.pendingListTodo.checkedTodos);
    this.pendingListTodo.removeCheckedTodosFromPendingList();
  }
  // Starting of services
  fetchTodoListFromServer() {
    this._todoService.fetchTodoListFromServer().subscribe(newPendingTodos => {
      this.newPendingTodoListFromServer = JSON.parse(JSON.stringify(newPendingTodos));
    });
  }
}