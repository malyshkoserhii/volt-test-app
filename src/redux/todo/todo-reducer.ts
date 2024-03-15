import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { setTodoStatus } from './todo-actions';

const todoStatus = createReducer({ id: '1', status: 'All' }, (builder) => {
  builder.addCase(setTodoStatus, (_, { payload }) => payload);
});

export const todoReducer = combineReducers({ todoStatus });
