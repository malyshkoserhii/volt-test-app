import * as React from 'react'
import classNames from 'classnames'
import { Button } from '@blueprintjs/core'

import {
  button,
  buttonsWrapper,
  compeltedTodo,
  description,
  item,
  title,
} from './todo-list-item.styles'
import { Todo } from '../../types'

type TodoListItemProps = {
  todo: Todo
  onTodoItem: (todo: Todo) => void
  onDelete: (todo: Todo) => void
  onEdit: (todo: Todo) => void
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  onTodoItem,
  onDelete,
  onEdit,
}): React.ReactNode  => {
  const onTodoItemClick = (): void=> {
    onTodoItem(todo)
  }

  const onDeleteClick = (event: React.SyntheticEvent<EventTarget>):void => {
    event.stopPropagation()
    onDelete(todo)
  }

  const onEditClick = (event: React.SyntheticEvent<EventTarget>):void => {
    event.stopPropagation()
    onEdit(todo)
  }
  
  return (
    <li className={item} onClick={onTodoItemClick}>
      <h3
        className={classNames(title, {
          [compeltedTodo]: todo?.completed,
        })}
      >
        {todo?.title}
      </h3>
      <p
        className={classNames(description, {
          [compeltedTodo]: todo?.completed,
        })}
      >
        {todo?.description}
      </p>
      <div className={buttonsWrapper}>
        <Button intent="warning" className={button} onClick={onDeleteClick}>
            Delete
        </Button>
        <Button className={button} onClick={onEditClick}>
            Details
        </Button>
      </div>
    </li>
  )
}
