import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';
import { todoComponent } from './todo/todo.component';
import { createTodoComponent } from './todo/create-todo/createTodo.component';
import { pendingListTodoComponent } from './todo/pending-list-todo/pendingListTodo.component';
import { completedTodoComponent } from './todo/completed-todo/completedTodo.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { StarDirective } from './directives/star.directive';
import { ChangeColorDirective } from './directives/change.color.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './power.pipe';
import { ShowEvenIndexPipe } from './even-index.pipe';
import { FetchComponent } from './fetch/fetch.component';
import { FetchResolveService } from './services/fetch.resolve.service';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'todos',
  component: todoComponent
},{
  path: 'pipes',
  component: PipesComponent
},{
  path: 'fetch',
  component: FetchComponent,
  resolve: {items: FetchResolveService},
  data: {
    name: 'Fetch route',
    key: 'no-key'
  }
},{
  path: 'fetch/:name/:key',
  component: FetchComponent
},{
  path: '**',
  redirectTo: ''
}]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    HomeComponent,
    todoComponent,
    createTodoComponent,
    pendingListTodoComponent,
    completedTodoComponent,
    StarDirective,
    ChangeColorDirective,
    PipesComponent,
    PowerPipe,
    ShowEvenIndexPipe,
    FetchComponent
  ],
  providers: [
    TodoService,
    FetchResolveService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
