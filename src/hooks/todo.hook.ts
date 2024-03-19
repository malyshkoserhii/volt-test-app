import * as React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../types/state.type'
import { Todo, CreateTodoPayload, TodoCount, PaginationData } from '../types'
import { useTodoSelectors } from '../selectors'
import * as todoOperations from '../redux/todo/todo.operations'
import * as todoActions from '../redux/todo/todo-actions'

type UseTodoReturn ={
  isFormOpen: boolean
  isDialogOpen: boolean
  counter: TodoCount
  todos: Array<Todo>
  todo: Todo
  todoStatus: string
  page: number
  paginationData: PaginationData
  loading: boolean
  onSubmit: (values: CreateTodoPayload) => void
  onCloseForm: () => void
  onCloseDialog: () => void
  onEdit: (todo: Todo) => void
  onDelete: (todo: Todo) => void
  onApprove: () => void
  onTodoItem: (todo: Todo) => void
  onPageChange: (selectedItem: { selected: number }) => void
}

export const useTodo = (): UseTodoReturn => {
  const [isFormOpen, setIsFormOpen] = React.useState(false)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const dispatch: AppDispatch = useDispatch()

  const { counter, todos, todo, todoStatus, page, paginationData, loading } =
    useTodoSelectors()

  React.useEffect(() => {
    dispatch(todoOperations.fetchTodos(todoStatus, page))
    dispatch(todoOperations.fetchTodoCount())
  }, [dispatch, todoStatus, page])

  const onCloseForm = ():void => {
    setIsFormOpen(false)
  }

  const onEdit = (todo: Todo):void => {
    setIsFormOpen(true)
    dispatch(todoActions.setTodo(todo))
  }

  const onDelete = (todo: Todo):void => {
    setIsDialogOpen(true)
    dispatch(todoActions.setTodo(todo))
  }

  const onCloseDialog = ():void => {
    setIsDialogOpen(false)
  }

  const onApprove = ():void => {
    dispatch(todoOperations.deleteTodo(todo.id, todoStatus, page))
    onCloseDialog()
  }

  const onSubmit = (values: CreateTodoPayload):void => {
    dispatch(
      todoOperations.updateTodo(
        {
          id: todo?.id,
          ...values,
        },
        todoStatus,
        page
      )
    )
    onCloseForm()
  }

  const onTodoItem = (todo: Todo):void => {
    dispatch(
      todoOperations.updateTodo(
        {
          ...todo,
          completed: !todo?.completed,
        },
        todoStatus,
        page
      )
    )
  }

  const onPageChange = (selectedItem: { selected: number }):void => {
    dispatch(todoActions.setPage(selectedItem?.selected))
  }

  return {
    isFormOpen,
    isDialogOpen,
    counter,
    todos,
    todo,
    todoStatus,
    page,
    paginationData,
    loading,
    onSubmit,
    onCloseForm,
    onCloseDialog,
    onEdit,
    onDelete,
    onApprove,
    onTodoItem,
    onPageChange,
  }
}
