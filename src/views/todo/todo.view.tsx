import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../../components/modal';
import { TodoList } from '../../components/todo-list';
import { RootState } from '../../types';
import * as actions from '../../redux/modal/modal-actions';
import { AppDispatch } from '../../redux/store';

export const TodoView = () => {
  const dispatch: AppDispatch = useDispatch();

  const isModalOpen = useSelector<RootState, boolean>(
    (state: RootState) => state.modal
  );

  console.log('isModalOpen: ', isModalOpen);

  const onClose = () => {
    dispatch(actions.closeModal());
  };

  return (
    <>
      <TodoList />
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <p>Hello World!</p>
      </Modal>
    </>
  );
};
