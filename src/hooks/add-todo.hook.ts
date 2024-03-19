import * as React from 'react'
import { useDispatch } from 'react-redux'

import { useTodoSelectors } from '../selectors'
import { AppDispatch, CreateTodoPayload } from '../types'
import * as todoOperations from '../redux/todo/todo.operations'

type UseAddTodoreturn = {
  isFormOpen: boolean
  onAddTodo: () => void
  onSubmit: (values: CreateTodoPayload) => void
  onCloseForm: () => void
}

export const useAddTodo = ():UseAddTodoreturn => {
  const [isFormOpen, setIsFormOpen] = React.useState(false)

  const dispatch: AppDispatch = useDispatch()

  const { todoStatus, page } = useTodoSelectors()

  const onAddTodo = ():void => {
    setIsFormOpen(true)
  }

  const onCloseForm = (): void => {
    setIsFormOpen(false)
  }

  const onSubmit = (values: CreateTodoPayload): void => {
    dispatch(todoOperations.addTodo(values, todoStatus, page))
    onCloseForm()
  }

  return {
    isFormOpen,
    onAddTodo,
    onSubmit,
    onCloseForm,
  }
}
