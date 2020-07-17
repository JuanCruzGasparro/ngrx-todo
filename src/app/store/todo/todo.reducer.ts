import { asNativeElements } from '@angular/core';
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
// import * as uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/entities/task.entity';

export const todoFeatureKey = 'todo';

export interface State {
  isLoading: boolean;
  items: Task[];
}

export const initialState: State = {
  isLoading: false,
  items: [],
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.getTodoList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TodoActions.getTodoListSuccess, (state, { items }) => ({
    ...state,
    items,
    isLoading: false,
  })),
  on(TodoActions.getTodoListFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
  })),
  on(TodoActions.addTask, (state) => ({ ...state, isLoading: true })),
  on(TodoActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    items: [...state.items, task],
    isLoading: false,
  })),
  on(TodoActions.addTaskFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
  })),
  on(TodoActions.toggleDone, (state, { id }) => {
    const items = state.items.reduce((accum, i) => {
      accum.push(i.id === id ? { ...i, isChecked: !i.isChecked } : i);
      return accum;
    }, []);
    return {
      ...state,
      items,
      isLoading: true,
    };
  }),
  on(TodoActions.toggleDoneSuccess, (state, { data }) => ({
    ...state,
    isLoading: true,
  })),
  on(TodoActions.toggleDoneFailure, (state, { error }) => ({
    ...state,
    isLoading: true,
  }))
);
