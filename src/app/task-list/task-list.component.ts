import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../entities/task.entity';
import { State } from '../store';
import { getTodoList, toggleDone } from '../store/todo/todo.actions';
import {
  getDoneTasksList,
  getTodoTasksList,
} from '../store/todo/todo.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  public todoTasks$: Observable<Task[]>;
  public doneTasks$: Observable<Task[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodoList());
    this.todoTasks$ = this.store.pipe(select(getTodoTasksList));
    this.doneTasks$ = this.store.pipe(select(getDoneTasksList));
  }

  toggleDone(id: string): void {
    this.store.dispatch(toggleDone({ id }));
  }
}
