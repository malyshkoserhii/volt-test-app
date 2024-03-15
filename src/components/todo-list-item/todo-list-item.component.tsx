import * as React from 'react';
import { Button } from '@blueprintjs/core';

import { button, buttonsWrapper, item, title } from './todo-list-item.styles';
import { Todo } from '../../types';

type TodoListItemProps = {
  todo: Todo;
  onDelete: () => void;
  onEdit: () => void;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <li className={item}>
        <h3 className={title}>{todo?.title}</h3>
        <div className={buttonsWrapper}>
          <Button intent="danger" className={button} onClick={onDelete}>
            Delete
          </Button>
          <Button intent="success" className={button} onClick={onEdit}>
            Edit
          </Button>
        </div>
      </li>
    </>
  );
};
