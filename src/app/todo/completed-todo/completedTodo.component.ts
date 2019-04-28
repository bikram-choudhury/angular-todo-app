import { Component, Input, OnChanges, ChangeDetectionStrategy, DoCheck, SimpleChanges } from '@angular/core';
@Component({
  selector: 'completed-todo',
  templateUrl: './completedTodo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class completedTodoComponent implements OnChanges{
  completedTodoList: string[] = ['Wash cloth','Buy a T-shirt', 'Learn rxjs', 'Call to Vikash']
  @Input() completedTodos: string[];

  ngOnChanges() {
    if(this.completedTodos) {
      for(let todo of this.completedTodos) {
        const index = this.completedTodoList.indexOf(todo);
        index > 0 && this.completedTodoList.splice(index, 1);
        this.completedTodoList.push(todo);
      }
    }
  }
}