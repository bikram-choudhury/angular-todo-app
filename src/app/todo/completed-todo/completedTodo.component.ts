import { Component, Input, OnChanges, ChangeDetectionStrategy, DoCheck } from '@angular/core';
@Component({
  selector: 'completed-todo',
  templateUrl: './completedTodo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class completedTodoComponent implements OnChanges, DoCheck{
  completedTodoList: string[] = ['Wash cloth','Buy a T-shirt', 'Learn rxjs', 'Call to Vikash']
  @Input() completedTodos: string[];

  ngOnChanges() {
    console.log("ngOnChanges: ", this.completedTodos);
    this.completedTodoList.push(...this.completedTodos);
  }
  ngDoCheck() {
    console.log("ngDoCheck: ", this.completedTodos);
    this.completedTodoList.push(...this.completedTodos);
  }
}