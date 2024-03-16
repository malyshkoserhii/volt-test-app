import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  editTodoError,
  editTodoRequest,
  editTodoSuccess,
  fetchTodosError,
  fetchTodosRequest,
  fetchTodosSuccess,
  setTodoStatus,
} from './todo-actions';

const todoStatus = createReducer({ id: '1', status: 'All' }, (builder) => {
  builder.addCase(setTodoStatus, (_, { payload }) => payload);
});

const todos = createReducer([], (builder) => {
  builder.addCase(fetchTodosSuccess, (_, { payload }) => payload);
});

const loading = createReducer(false, (builder) => {
  builder.addCase(fetchTodosRequest, () => true);
  builder.addCase(fetchTodosSuccess, () => false);
  builder.addCase(fetchTodosError, () => false);
  builder.addCase(addTodoRequest, () => true);
  builder.addCase(addTodoSuccess, () => false);
  builder.addCase(addTodoError, () => false);
  builder.addCase(editTodoRequest, () => true);
  builder.addCase(editTodoSuccess, () => false);
  builder.addCase(editTodoError, () => false);
  builder.addCase(deleteTodoRequest, () => true);
  builder.addCase(deleteTodoSuccess, () => false);
  builder.addCase(deleteTodoError, () => false);
});

// [fetchContactsRequest]: () => true,
// [fetchContactsSuccess]: () => false,
// [fetchContactsError]: () => false,
// [addContactRequest]: () => true,
// [addContactSuccess]: () => false,
// [addContactError]: () => false,
// [deleteContactRequest]: () => true,
// [deleteContactError]: () => false,
// [editContactRequest]: () => true,
// [editContactSuccess]: () => false,
// [editContactError]: () => false,

export const todoReducer = combineReducers({ todoStatus, todos, loading });
