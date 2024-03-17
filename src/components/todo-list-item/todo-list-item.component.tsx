import * as React from 'react';
import classNames from 'classnames';
import { Button } from '@blueprintjs/core';

import {
  button,
  buttonsWrapper,
  compeltedTodo,
  item,
  title,
} from './todo-list-item.styles';
import { Todo } from '../../types';

type TodoListItemProps = {
  todo: Todo;
  onTodoItem: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  onTodoItem,
  onDelete,
  onEdit,
}) => {
  const onTodoItemClick = () => {
    onTodoItem(todo);
  };

  const onDeleteClick = (event: React.SyntheticEvent<EventTarget>) => {
    event.stopPropagation();
    onDelete(todo);
  };

  const onEditClick = (event: React.SyntheticEvent<EventTarget>) => {
    event.stopPropagation();
    onEdit(todo);
  };
  return (
    <>
      <li className={item} onClick={onTodoItemClick}>
        <h3
          className={classNames(title, {
            [compeltedTodo]: todo?.completed,
          })}
        >
          {todo?.title}
        </h3>
        <div className={buttonsWrapper}>
          <Button intent="warning" className={button} onClick={onDeleteClick}>
            Delete
          </Button>
          <Button className={button} onClick={onEditClick}>
            Edit
          </Button>
        </div>
      </li>
    </>
  );
};
