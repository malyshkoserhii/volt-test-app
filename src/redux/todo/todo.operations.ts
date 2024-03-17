import { AxiosError } from 'axios';
import { todoService } from '../../services/todo.service';
import { AppDispatch } from '../store';
import * as actions from './todo-actions';
import { CreateTodoPayload } from '../../types';

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  dispatch(actions.fetchTodosRequest());

  try {
    const result = await todoService.getAllTodos({ skip: 0, take: 5 });

    dispatch(actions.fetchTodosSuccess(result?.data));
    //?
    dispatch(actions.fetchTodosError(''));
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(actions.fetchTodosError(error?.response?.data?.message));
    }
  }
};

export const addTodo =
  (payload: CreateTodoPayload) => async (dispatch: AppDispatch) => {
    dispatch(actions.deleteTodoRequest());

    try {
      await todoService.addTodo(payload);

      fetchTodos()(dispatch);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.deleteTodoError(error?.response?.data?.message));
      }
    }
  };

export const deleteTodo = (todoId: string) => async (dispatch: AppDispatch) => {
  dispatch(actions.deleteTodoRequest());

  try {
    await todoService.deleteTodo(todoId);

    fetchTodos()(dispatch);
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(actions.deleteTodoError(error?.response?.data?.message));
    }
  }
};
