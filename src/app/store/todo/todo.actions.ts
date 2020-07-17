import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/entities/task.entity';

export const getTodoList = createAction('[Todo] Get Todo List');

export const getTodoListSuccess = createAction(
  '[Todo] Get Todo List Success',
  props<{ items: Task[] }>()
);

export const getTodoListFailure = createAction(
  '[Todo] Get Todo List Failure',
  props<{ error: any }>()
);

export const addTask = createAction(
  '[Todo] Add Task',
  props<{ text: string }>()
);

export const addTaskSuccess = createAction(
  '[Todo] Add Task Success',
  props<{ task: Task }>()
);

export const addTaskFailure = createAction(
  '[Todo] Add Task Failure',
  props<{ error: any }>()
);

export const toggleDone = createAction(
  '[Todo] Toggle Done',
  props<{ id: string }>()
);

export const toggleDoneSuccess = createAction(
  '[Todo] Toggle Done Success',
  props<{ data: any }>()
);

export const toggleDoneFailure = createAction(
  '[Todo] Toggle Done Failure',
  props<{ error: any }>()
);
