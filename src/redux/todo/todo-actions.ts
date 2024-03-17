import { createAction } from '@reduxjs/toolkit';

import { Option } from '../../components/select';
import { CreateTodoPayload, Todo } from '../../types';

export const setTodoStatus = createAction<Option>('todo/setTodoStatus');

export const setTodo = createAction<Todo>('todo/setTodo');

export const addTodo = createAction<CreateTodoPayload>('todo/addTodo');
export const updateTodoStatus = createAction<CreateTodoPayload>(
  'todo/updateTodoStatus'
);
export const deleteStatus = createAction<string>('todo/deleteStatus');

export const fetchTodosRequest = createAction('todos/fetchTodosRequest');
export const fetchTodosSuccess = createAction<Array<Todo>>(
  'todos/fetchTodosSuccess'
);
export const fetchTodosError = createAction<string>('todos/fetchTodosError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodosError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction<string>(
  'todos/deleteTodoSuccess'
);
export const deleteTodoError = createAction<string>('todos/deleteTodoError');

export const updateTodoRequest = createAction('todos/updateTodoRequest');
export const updateTodoSuccess = createAction<Todo>('todos/updateTodoSuccess');
export const updateTodoError = createAction('todos/editTodosError');
