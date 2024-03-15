import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Modal } from '../../components/modal';
import { TodoForm } from '../../components/todo-form';
import { TodoList } from '../../components/todo-list';
// import { RootState } from '../../types';
// import * as actions from '../../redux/modal/modal-actions';
// import { AppDispatch } from '../../redux/store';

export const TodoView = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  // const dispatch: AppDispatch = useDispatch();

  // const isModalOpen = useSelector<RootState, boolean>(
  //   (state: RootState) => state.modal
  // );

  const onEdit = () => {
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <TodoList onEdit={onEdit} />
      <TodoForm isFormOpen={isFormOpen} onCloseForm={onCloseForm} />
    </>
  );
};
