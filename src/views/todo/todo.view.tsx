import * as React from 'react';

import { TodoForm } from '../../components/todo-form';
import { TodoList } from '../../components/todo-list';
import { Dialog } from '../../components/dialog';

export const TodoView = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(true);

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
      <TodoList onEdit={onEdit} onDelete={onDelete} />
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
