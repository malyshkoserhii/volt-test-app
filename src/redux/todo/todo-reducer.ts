import { combineReducers, createReducer } from '@reduxjs/toolkit'

import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  updateTodoSuccess,
  fetchTodosError,
  fetchTodosRequest,
  fetchTodosSuccess,
  setTodo,
  setTodoStatus,
  countTodoSuccess,
  setPage,
  setPaginationData,
  updateTodoStatusSuccess,
  countTodoError,
  countTodoRequest,
  updateTodoList,
} from './todo-actions'
import { Todo } from '../../types'

const todoStatus = createReducer({ label: 'all', option: 'All' }, (builder) => {
  builder.addCase(setTodoStatus, (_, { payload }) => payload)
})

const todos = createReducer([] as Array<Todo>, (builder) => {
  builder.addCase(fetchTodosSuccess, (_, { payload }) => payload)
  builder.addCase(updateTodoSuccess, (state, { payload }) =>
    state?.map((todo) => todo?.id === payload?.id ? payload : todo)
  )
  builder.addCase(updateTodoStatusSuccess, (state, { payload }) =>
    state?.map((todo) => todo?.id === payload?.id ? payload : todo)
  )
  builder.addCase(updateTodoList, (state, { payload }) =>
    state?.filter((todo) => todo?.id !== payload?.id)
  )
})

const todo = createReducer({}, (builder) => {
  builder.addCase(setTodo, (_, { payload }) => payload)
})

const todoCount = createReducer({ completed: 0, current: 0 }, (builder) => {
  builder.addCase(countTodoSuccess, (_, { payload }) => payload)
})

const todosError = createReducer('', (builder) => {
  builder.addCase(fetchTodosError, (_, { payload }) => payload)
})

const page = createReducer(0, (builder) => {
  builder.addCase(setPage, (_, { payload }) => payload)
})

const paginationData = createReducer(
  { totalPages: 0, totalResults: 0 },
  (builder) => {
    builder.addCase(setPaginationData, (_, { payload }) => payload)
  }
)

const loading = createReducer(false, (builder) => {
  builder.addCase(fetchTodosRequest, () => true)
  builder.addCase(fetchTodosSuccess, () => false)
  builder.addCase(fetchTodosError, () => false)
  builder.addCase(addTodoRequest, () => true)
  builder.addCase(addTodoSuccess, () => false)
  builder.addCase(addTodoError, () => false)
  builder.addCase(deleteTodoRequest, () => true)
  builder.addCase(deleteTodoSuccess, () => false)
  builder.addCase(deleteTodoError, () => false)
  builder.addCase(countTodoRequest, () => true)
  builder.addCase(countTodoSuccess, () => false)
  builder.addCase(countTodoError, () => false)
})

export const todoReducer = combineReducers({
  todo,
  todos,
  todoCount,
  todoStatus,
  todosError,
  page,
  paginationData,
  loading,
})
