import * as React from 'react';

import { list } from './todo-list.styles';
import { TodoListItem } from '../todo-list-item';
import { Todo } from '../../types';

type TodoListProps = {
  todos: Array<Todo>;
  onTodoItem: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
};

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  onTodoItem,
  onDelete,
  onEdit,
}) => {
  return (
    <ul className={list}>
      {todos?.map((todo) => {
        return (
          <TodoListItem
            key={todo?.id}
            todo={todo}
            onTodoItem={onTodoItem}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </ul>
  );
};
