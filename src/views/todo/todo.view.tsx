import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as todoOperations from '../../redux/todo/todo.operations';
import { TodoForm } from '../../components/todo-form';
import { TodoList } from '../../components/todo-list';
import { Dialog } from '../../components/dialog';
import { AppDispatch } from '../../redux/store';
import { RootState, Todo } from '../../types';

export const TodoView = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

  const todos = useSelector<RootState, Array<Todo>>(
    (state) => state.todo.todos
  );

  React.useEffect(() => {
    dispatch(todoOperations.fetchTodos());
  }, [dispatch]);

  const onEdit = () => {
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  const onDelete = () => {
    setIsDialogOpen(true);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <TodoList todos={todos} onEdit={onEdit} onDelete={onDelete} />
      <TodoForm isFormOpen={isFormOpen} onCloseForm={onCloseForm} />
      <Dialog
        text="Do you want to delete Todo?"
        isOpen={isDialogOpen}
        onClose={onCloseDialog}
        onApprove={() => {}}
      />
    </>
  );
};
