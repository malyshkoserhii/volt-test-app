import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  updateTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  fetchTodosError,
  fetchTodosRequest,
  fetchTodosSuccess,
  setTodo,
  setTodoStatus,
  countTodoRequest,
  countTodoSuccess,
  countTodoError,
} from './todo-actions';
import { Todo } from '../../types';

const todoStatus = createReducer({ label: 'all', option: 'All' }, (builder) => {
  builder.addCase(setTodoStatus, (_, { payload }) => payload);
});

const todos = createReducer([] as Array<Todo>, (builder) => {
  builder.addCase(fetchTodosSuccess, (_, { payload }) => payload);
  builder.addCase(updateTodoSuccess, (state, { payload }) =>
    state?.map((todo) => (todo?.id === payload?.id ? payload : todo))
  );
});

const todo = createReducer({}, (builder) => {
  builder.addCase(setTodo, (_, { payload }) => payload);
});

const todoCount = createReducer({ completed: 0, current: 0 }, (builder) => {
  builder.addCase(countTodoSuccess, (_, { payload }) => payload);
});

const todosError = createReducer('', (builder) => {
  builder.addCase(fetchTodosError, (_, { payload }) => payload);
});

const loading = createReducer(false, (builder) => {
  builder.addCase(fetchTodosRequest, () => true);
  builder.addCase(fetchTodosSuccess, () => false);
  builder.addCase(fetchTodosError, () => false);
  builder.addCase(addTodoRequest, () => true);
  builder.addCase(addTodoSuccess, () => false);
  builder.addCase(addTodoError, () => false);
  builder.addCase(updateTodoRequest, () => true);
  builder.addCase(updateTodoSuccess, () => false);
  builder.addCase(updateTodoError, () => false);
  builder.addCase(deleteTodoRequest, () => true);
  builder.addCase(deleteTodoSuccess, () => false);
  builder.addCase(deleteTodoError, () => false);
  builder.addCase(countTodoRequest, () => true);
  builder.addCase(countTodoSuccess, () => false);
  builder.addCase(countTodoError, () => false);
});

export const todoReducer = combineReducers({
  todo,
  todos,
  todoCount,
  todoStatus,
  todosError,
  loading,
});
