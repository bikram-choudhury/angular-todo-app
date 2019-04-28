import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WrapperComponent } from './wrapper.component';
import { todoComponent } from './todo/todo.component';
import { createTodoComponent } from './todo/create-todo/createTodo.component';
import { pendingListTodoComponent } from './todo/pending-list-todo/pendingListTodo.component';
import { completedTodoComponent } from './todo/completed-todo/completedTodo.component';
import { TodoService } from './services/todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    WrapperComponent,
    todoComponent,
    createTodoComponent,
    pendingListTodoComponent,
    completedTodoComponent
  ],
  providers: [
    TodoService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
