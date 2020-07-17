import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '..';
import { State as TodoState } from '../todo/todo.reducer';

export const featureKey = 'todo';

export const todoFeature = createFeatureSelector<State, TodoState>(featureKey);

export const getTodoTasksList = createSelector(
  todoFeature,
  (state: TodoState) => state.items.filter((i) => i.isChecked === false)
);

export const getDoneTasksList = createSelector(
  todoFeature,
  (state: TodoState) => state.items.filter((i) => i.isChecked === true)
);

export const getIsLoading = createSelector(
  todoFeature,
  (state: TodoState) => state.isLoading
);
