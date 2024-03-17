import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { AppDispatch } from '../../redux/store';
import { CreateTodoPayload, RootState } from '../../types';
import * as todoOperations from '../../redux/todo/todo.operations';
import { actionsWrapper, header, logo } from './header.styles';
import { Select } from '../select';
import { TodoForm } from '../todo-form';

export const Header = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

  const todoStatus = useSelector<RootState, string>(
    (state) => state.todosData?.todoStatus?.label
  );

  const onAddTodo = () => {
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  const onSubmit = (values: CreateTodoPayload) => {
    dispatch(todoOperations.addTodo(values, todoStatus));
    onCloseForm();
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
      <TodoForm
        onSubmit={onSubmit}
        isFormOpen={isFormOpen}
        onCloseForm={onCloseForm}
      />
    </>
  );
};
