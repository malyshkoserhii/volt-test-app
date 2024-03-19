import { useSelector } from 'react-redux'

import { RootState, TodoCount, Todo, PaginationData } from '../types'

type UseTodoSelectorsReturn = {
  counter: TodoCount
  todos: Array<Todo>
  todo: Todo
  todoStatus: string
  page: number
  paginationData: PaginationData
  loading: boolean
}

export const useTodoSelectors = ():UseTodoSelectorsReturn => {
  const counter = useSelector<RootState, TodoCount>(
    (state) => state.todosData.todoCount
  )
  const todos = useSelector<RootState, Array<Todo>>(
    (state) => state.todosData.todos
  )
  const todo = useSelector<RootState, Todo>((state) => state.todosData.todo)
  const todoStatus = useSelector<RootState, string>(
    (state) => state.todosData?.todoStatus?.label
  )
  const page = useSelector<RootState, number>((state) => state.todosData.page)
  const paginationData = useSelector<RootState, PaginationData>(
    (state) => state.todosData.paginationData
  )
  const loading = useSelector<RootState, boolean>(
    (state) => state.todosData?.loading
  )

  return {
    counter,
    todos,
    todo,
    todoStatus,
    page,
    paginationData,
    loading,
  }
}
