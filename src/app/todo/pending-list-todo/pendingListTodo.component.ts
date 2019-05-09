import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pending-list-todo',
  templateUrl: './pendingListTodo.component.html'
})
export class pendingListTodoComponent implements OnChanges {
  pendingTodoList: string[] = ['Take out the trash', 'Buy bread', 'Teach penguins to fly', 'Learn Angular'];
  checkedTodos: string[] = []; 
  checked: boolean = false;
  @Input('newTodo') newTodo: string;
  @Input() newPendingList: string[];
  @Input() stars: number;

  ngOnChanges(changes: SimpleChanges) {
    const todoInput = changes['newTodo'] && changes['newTodo']['currentValue'] || '';
    todoInput && this.pendingTodoList.push(todoInput);

    const newPendingTodos = changes['newPendingList'] && changes['newPendingList']['currentValue'] || '';
    newPendingTodos && this.pendingTodoList.push(...newPendingTodos)

  }
  modifyTodoCheckList(event: Event|any, todo:string){
    if(event.target.checked) {
      this.checkedTodos.push(todo);
    } else {
      const index = this.checkedTodos.indexOf(todo);
      this.checkedTodos.splice(index, 1);
    }
  }
  removeCheckedTodosFromPendingList() {
    this.pendingTodoList = this.pendingTodoList.filter(todo => this.checkedTodos.indexOf(todo) == -1)
    this.checkedTodos.length = 0;
  }
  getPendingTodoList(todoList: string[]) {

  }
}