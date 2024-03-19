import * as React from 'react'
import { Button } from '@blueprintjs/core'

import { actionsWrapper, header, logo } from './header.styles'
import { Select } from '../select'
import { TodoForm } from '../todo-form'
import { useAddTodo } from '../../hooks'

export const Header = (): React.ReactNode=> {
  const { isFormOpen, onAddTodo, onSubmit, onCloseForm } = useAddTodo()

  return (
    <>
      <header className={header}>
        <p className={logo}>My Awesome Todo App</p>
        <div className={actionsWrapper}>
          <Select />
          <Button text="Add Todo" onClick={onAddTodo} />
        </div>
      </header>
      <TodoForm
        onSubmit={onSubmit}
        isFormOpen={isFormOpen}
        onCloseForm={onCloseForm}
      />
    </>
  )
}
