import * as React from 'react';

import { TodoListItem } from '../todo-list-item';
import { list } from './todo-list.styles';
import { Todo } from '../../types';

type TodoListProps = {
  todos: Array<Todo>;
  onDelete: (todo: Todo) => void;
  onEdit: () => void;
};

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <ul className={list}>
        {todos?.map((todo) => {
          return (
            <TodoListItem
              key={todo?.id}
              todo={todo}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
    </>
  );
};
