import { AxiosError } from 'axios';
import { todoService } from '../../services/todo.service';
import { AppDispatch } from '../store';
import * as actions from './todo-actions';
import { CreateTodoPayload, UpdateTodoPayload } from '../../types';

export const fetchTodos = (status: string) => async (dispatch: AppDispatch) => {
  dispatch(actions.fetchTodosRequest());

  try {
    const result = await todoService.getAllTodos({ status, skip: 0, take: 5 });

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
  (payload: CreateTodoPayload, status: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.addTodoRequest());

    try {
      await todoService.addTodo(payload);
      fetchTodos(status)(dispatch);
      fetchTodoCount()(dispatch);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.addTodoError(error?.response?.data?.message));
      }
    }
  };

export const updateTodo =
  (payload: UpdateTodoPayload) => async (dispatch: AppDispatch) => {
    try {
      dispatch(actions.updateTodoRequest());

      const updatedTodo = await todoService.updateTodo(payload);

      dispatch(actions.updateTodoSuccess(updatedTodo?.data));
      fetchTodoCount()(dispatch);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.updateTodoError(error?.response?.data?.message));
      }
    }
  };

export const deleteTodo =
  (todoId: string, status: string) => async (dispatch: AppDispatch) => {
    dispatch(actions.deleteTodoRequest());

    try {
      await todoService.deleteTodo(todoId);
      fetchTodos(status)(dispatch);
      fetchTodoCount()(dispatch);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.deleteTodoError(error?.response?.data?.message));
      }
    }
  };

export const fetchTodoCount = () => async (dispatch: AppDispatch) => {
  dispatch(actions.fetchTodosRequest());

  try {
    const result = await todoService.getTodoCount();

    dispatch(actions.countTodoSuccess(result));
    //?
    dispatch(actions.countTodoError(''));
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(actions.countTodoError(error?.response?.data?.message));
    }
  }
};
