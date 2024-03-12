import * as React from 'react';

import { button, buttonsWrapper, item, title } from './todo-list-item.styles';
import { Todo } from '../../types';
import { Button } from '@blueprintjs/core';

type TodoListItemProps = {
  todo: Todo;
  onDelete: () => void;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  onDelete,
}) => {
  return (
    <li className={item}>
      <h3 className={title}>{todo?.title}</h3>
      <div className={buttonsWrapper}>
        <Button className={button} onClick={onDelete}>
          Delete
        </Button>
        <Button className={button}>Edit</Button>
        <Button className={button}>View details</Button>
      </div>
    </li>
  );
};
