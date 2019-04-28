import { Component } from '@angular/core';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class todoComponent {
  completedTodos: string[];

  handlePendingTodos(todos: string[]){
    this.completedTodos = JSON.parse(JSON.stringify(todos));    
    console.log(`completedTodos: ${this.completedTodos}`);
  }
}