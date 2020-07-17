import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/services/task/task.service';
import * as TodoActions from '../todo/todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  getTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getTodoList),
      mergeMap(() =>
        this.taskService.getAll().pipe(
          map(({ data }) => TodoActions.getTodoListSuccess({ items: data })),
          catchError((error) => of(TodoActions.getTodoListFailure({ error })))
        )
      )
    )
  );

  addTodoTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTask),
      mergeMap(({ text }) =>
        this.taskService.add(text).pipe(
          map(({ data }) => TodoActions.addTaskSuccess({ task: data })),
          catchError((error) => of(TodoActions.addTaskFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
