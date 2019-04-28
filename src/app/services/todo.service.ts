import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TodoService {
    private apiURL: string = `//jsonplaceholder.typicode.com/todos`;
    private todoListFromServer: any[];
    constructor(private _http: HttpClient){}
    fetchTodoListFromServer(): Observable<any> {
        console.log("fetch Todo at service");
        if(this.todoListFromServer && this.todoListFromServer.length) {
            const todoFromPagination = this.paginateTodoList();
            return of(todoFromPagination);
        } else {
            return this._http.get(this.apiURL).pipe(
                map(response => {
                    const todoTitles = this.formatTodos(response);
                    this.todoListFromServer = todoTitles;
                    return this.paginateTodoList();
                }),
                catchError(error => of(error))
            );
        }
    }
    formatTodos(todoList) {
        return todoList && todoList.length && todoList.map(todo => todo.title) || []
    }
    paginateTodoList() {
        return this.todoListFromServer && this.todoListFromServer.length && this.todoListFromServer.splice(0, 10) || [];
    }
}