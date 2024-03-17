import * as React from 'react';
import { Button } from '@blueprintjs/core';

import { button, buttonsWrapper, item, title } from './todo-list-item.styles';
import { Todo } from '../../types';

type TodoListItemProps = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onEdit: () => void;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  onDelete,
  onEdit,
}) => {
  const onDeleteClick = () => {
    onDelete(todo);
  };
  return (
    <>
      <li className={item}>
        <h3 className={title}>{todo?.title}</h3>
        <div className={buttonsWrapper}>
          <Button intent="warning" className={button} onClick={onDeleteClick}>
            Delete
          </Button>
          <Button className={button} onClick={onEdit}>
            Edit
          </Button>
        </div>
      </li>
    </>
  );
};
