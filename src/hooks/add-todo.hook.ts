import * as React from 'react';
import { useDispatch } from 'react-redux';

import { useTodoSelectors } from '../selectors';
import { AppDispatch, CreateTodoPayload } from '../types';
import * as todoOperations from '../redux/todo/todo.operations';

export const useAddTodo = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

  const { todoStatus, page } = useTodoSelectors();

  const onAddTodo = () => {
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  const onSubmit = (values: CreateTodoPayload) => {
    dispatch(todoOperations.addTodo(values, todoStatus, page));
    onCloseForm();
  };

  return {
    isFormOpen,
    onAddTodo,
    onSubmit,
    onCloseForm,
  };
};
