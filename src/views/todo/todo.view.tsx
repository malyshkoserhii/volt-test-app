import { useDispatch, useSelector } from 'react-redux';

import { TodoForm } from '../../components/todo-form';
import { TodoList } from '../../components/todo-list';
import { RootState } from '../../types';
import * as actions from '../../redux/modal/modal-actions';
import { AppDispatch } from '../../redux/store';

export const TodoView = () => {
  const dispatch: AppDispatch = useDispatch();

  const isModalOpen = useSelector<RootState, boolean>(
    (state: RootState) => state.modal
  );

  const onEdit = () => {
    dispatch(actions.openModal());
  };

  const onCloseForm = () => {
    dispatch(actions.closeModal());
  };

  return (
    <>
      <TodoList onEdit={onEdit} />
      <TodoForm isFormOpen={isModalOpen} onCloseForm={onCloseForm} />
    </>
  );
};
