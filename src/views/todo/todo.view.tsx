import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as todoOperations from '../../redux/todo/todo.operations';
import * as todoActions from '../../redux/todo/todo-actions';
import { TodoForm } from '../../components/todo-form';
import { TodoList } from '../../components/todo-list';
import { Dialog } from '../../components/dialog';
import { AppDispatch } from '../../redux/store';
import { CreateTodoPayload, RootState, Todo, TodoCount } from '../../types';
import { Counter } from '../../components/counter';
import { Empty } from '../../components/empty';

export const TodoView = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

  const counter = useSelector<RootState, TodoCount>(
    (state) => state.todosData.todoCount
  );

  const todos = useSelector<RootState, Array<Todo>>(
    (state) => state.todosData.todos
  );

  const todo = useSelector<RootState, Todo>((state) => state.todosData.todo);

  const todoStatus = useSelector<RootState, string>(
    (state) => state.todosData?.todoStatus?.label
  );

  React.useEffect(() => {
    dispatch(todoOperations.fetchTodos(todoStatus));
    dispatch(todoOperations.fetchTodoCount());
  }, [dispatch, todoStatus]);

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
    dispatch(todoOperations.deleteTodo(todo.id, todoStatus));
    onCloseDialog();
  };

  const onSubmit = (values: CreateTodoPayload) => {
    dispatch(
      todoOperations.updateTodo({
        id: todo?.id,
        ...values,
      })
    );
    onCloseForm();
  };

  const onTodoItem = (todo: Todo) => {
    dispatch(
      todoOperations.updateTodo({
        ...todo,
        completed: !todo?.completed,
      })
    );
  };

  return (
    <>
      <Counter compeled={counter?.completed} current={counter?.current} />
      {todos?.length === 0 ? (
        <Empty status={todoStatus} />
      ) : (
        <TodoList
          todos={todos}
          onTodoItem={onTodoItem}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      <TodoForm
        todo={todo}
        onSubmit={onSubmit}
        isFormOpen={isFormOpen}
        onCloseForm={onCloseForm}
      />
      <Dialog
        text="Do you want to delete Todo?"
        isOpen={isDialogOpen}
        onClose={onCloseDialog}
        onApprove={onApprove}
      />
    </>
  );
};
