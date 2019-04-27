import { Component } from '@angular/core';

@Component({
  selector: 'pending-list-todo',
  templateUrl: './pendingListTodo.component.html'
})
export class pendingListTodoComponent {
  pendingTodoList: string[] = ['Take out the trash', 'Buy bread', 'Teach penguins to fly', 'Learn Angular'];
  checkedTodos: string[] = []; 
  checked: boolean = false;

  addTodoToCheckList(todo: string){
    const index = this.checkedTodos.indexOf(todo);
    if(index > -1){
      this.checkedTodos.splice(index, 1);
    }
    this.checkedTodos.push(todo);
    console.log(`Clicked todo: ${todo}`);
    console.log(`Checked todos: ${this.checkedTodos}`);
  }
  modifyTodoCheckList(event: Event, todo:string){
    // console.log("checkbox event: ", event);
    if(event.target.checked) {
      this.checkedTodos.push(todo);
    } else {
      const index = this.checkedTodos.indexOf(todo);
      this.checkedTodos.splice(index, 1);
    }
    console.log(`Checked todos: ${this.checkedTodos}`);
  }
  removeCheckedTodosFromPendingList() {
    // this.pendingTodoList = this.pendingTodoList.filter(todo => this.checkedTodos.indexOf(todo) == -1)
    // this.checkedTodos.length = 0;
  }
}