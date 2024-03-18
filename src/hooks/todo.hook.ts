import * as React from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../types/state.type';
import { Todo, CreateTodoPayload } from '../types';
import { useTodoSelectors } from '../selectors';
import * as todoOperations from '../redux/todo/todo.operations';
import * as todoActions from '../redux/todo/todo-actions';

export const useTodo = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

  const { counter, todos, todo, todoStatus, page, paginationData, loading } =
    useTodoSelectors();

  React.useEffect(() => {
    dispatch(todoOperations.fetchTodos(todoStatus, page));
    dispatch(todoOperations.fetchTodoCount());
  }, [dispatch, todoStatus, page]);

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  const onEdit = (todo: Todo) => {
    setIsFormOpen(true);
    dispatch(todoActions.setTodo(todo));
  };

  const onDelete = (todo: Todo) => {
    setIsDialogOpen(true);
    dispatch(todoActions.setTodo(todo));
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onApprove = () => {
    dispatch(todoOperations.deleteTodo(todo.id, todoStatus, page));
    onCloseDialog();
  };

  const onSubmit = (values: CreateTodoPayload) => {
    dispatch(
      todoOperations.updateTodo(
        {
          id: todo?.id,
          ...values,
        },
        todoStatus,
        page
      )
    );
    onCloseForm();
  };

  const onTodoItem = (todo: Todo) => {
    dispatch(
      todoOperations.updateTodo(
        {
          ...todo,
          completed: !todo?.completed,
        },
        todoStatus,
        page
      )
    );
  };

  const onPageChange = (selectedItem: { selected: number }) => {
    dispatch(todoActions.setPage(selectedItem?.selected));
  };

  return {
    isFormOpen,
    isDialogOpen,
    counter,
    todos,
    todo,
    todoStatus,
    page,
    paginationData,
    loading,
    onSubmit,
    onCloseForm,
    onCloseDialog,
    onEdit,
    onDelete,
    onApprove,
    onTodoItem,
    onPageChange,
  };
};
