import * as React from 'react';
import { Button } from '@blueprintjs/core';

// // import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from '../../redux/store';
// import { RootState } from '../../types';
// import * as actions from '../../redux/modal/modal-actions';

import { actionsWrapper, header, logo } from './header.styles';
import { Select } from '../select';
import { TodoForm } from '../todo-form';

export const Header = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  // const dispatch: AppDispatch = useDispatch();

  // const isModalOpen = useSelector<RootState, boolean>(
  //   (state: RootState) => state.modal
  // );

  const onAddTodo = () => {
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
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
      <TodoForm isFormOpen={isFormOpen} onCloseForm={onCloseForm} />
    </>
  );
};
