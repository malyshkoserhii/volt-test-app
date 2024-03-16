import { useDispatch, useSelector } from 'react-redux';

import { actionsWrapper, header, logo } from './header.styles';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types';
import { Select } from '../select';
import * as actions from '../../redux/modal/modal-actions';
import { TodoForm } from '../todo-form';
import { Button } from '@blueprintjs/core';

export const Header = () => {
  const dispatch: AppDispatch = useDispatch();

  const isModalOpen = useSelector<RootState, boolean>(
    (state: RootState) => state.modal
  );

  const onAddTodo = () => {
    dispatch(actions.openModal());
  };

  const onCloseForm = () => {
    dispatch(actions.closeModal());
  };

  return (
    <>
      <header className={header}>
        <p className={logo}>My simple Todo app</p>
        <div className={actionsWrapper}>
          <Select />
          <Button text="Add Todo" onClick={onAddTodo} />
        </div>
      </header>
      <TodoForm isFormOpen={isModalOpen} onCloseForm={onCloseForm} />
    </>
  );
};
