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
} from './todo-actions';
import { Todo } from '../../types';

const todoStatus = createReducer({ id: '1', status: 'All' }, (builder) => {
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
});

export const todoReducer = combineReducers({
  todo,
  todos,
  todoStatus,
  loading,
  todosError,
});

export const test = {
  completed: true,
  created_at: '2024-03-11T13:16:03.077Z',
  description: 'Complete 8 task!',
  id: 'd1ec20bf-9962-488b-9d02-c67e2533d54c',
  title: 'My 8 todo',
  updated_at: '2024-03-11T13:16:03.077Z',
};
