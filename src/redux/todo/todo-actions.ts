import { createAction } from '@reduxjs/toolkit'

import {
  CreateTodoPayload,
  PaginationData,
  Todo,
  TodoCount,
} from '../../types'
import { SelectorOptions } from '../../types/common.type'

export const setTodoStatus =
  createAction<SelectorOptions>('todo/setTodoStatus')

export const setTodo = createAction<Todo>('todo/setTodo')

export const addTodo = createAction<CreateTodoPayload>('todo/addTodo')
export const updateTodoStatus = createAction<Todo>('todo/updateTodoStatus')
export const deleteStatus = createAction<string>('todo/deleteStatus')

export const fetchTodosRequest = createAction('todos/fetchTodosRequest')
export const fetchTodosSuccess = createAction<Array<Todo>>(
  'todos/fetchTodosSuccess'
)
export const fetchTodosError = createAction<string>('todos/fetchTodosError')

export const updateTodoList = createAction<Todo>('todos/updateTodoList')

export const addTodoRequest = createAction('todos/addTodoRequest')
export const addTodoSuccess = createAction('todos/addTodoSuccess')
export const addTodoError = createAction('todos/addTodosError')

export const deleteTodoRequest = createAction('todos/deleteTodoRequest')
export const deleteTodoSuccess = createAction<string>(
  'todos/deleteTodoSuccess'
)
export const deleteTodoError = createAction<string>('todos/deleteTodoError')

export const updateTodoRequest = createAction('todos/updateTodoRequest')
export const updateTodoSuccess = createAction<Todo>('todos/updateTodoSuccess')
export const updateTodoError = createAction('todos/editTodosError')

export const updateTodoStatusRequest = createAction(
  'todos/updateTodoStatusRequest'
)
export const updateTodoStatusSuccess = createAction<Todo>(
  'todos/updateTodoStatusSuccess'
)
export const updateTodoStatusError = createAction(
  'todos/updateTodoStatusError'
)

export const countTodoRequest = createAction('todos/countTodoRequest')
export const countTodoSuccess = createAction<TodoCount>(
  'todos/countTodoSuccess'
)
export const countTodoError = createAction<string>('todos/countTodoError')

export const setPage = createAction<number>('todos/setPage')

export const setPaginationData = createAction<PaginationData>(
  'todos/setPaginationData'
)
