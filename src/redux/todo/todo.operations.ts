import { AxiosError } from 'axios';

import { todoService } from '../../services/todo.service';
import { AppDispatch } from '../../types/state.type';
import * as actions from './todo-actions';
import { CreateTodoPayload, UpdateTodoPayload } from '../../types';
import { TodoLabels } from '../../types/common.type';

export const fetchTodos =
  (status: string, page: number) => async (dispatch: AppDispatch) => {
    dispatch(actions.fetchTodosRequest());

    try {
      const result = await todoService.getAllTodos({ status, page });

      dispatch(actions.fetchTodosSuccess(result?.data));
      dispatch(
        actions.setPaginationData({
          totalPages: result?.totalPages,
          totalResults: result?.totalResults,
        })
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.fetchTodosError(error?.response?.data?.message));
      }
    }
  };

export const addTodo =
  (payload: CreateTodoPayload, status: string, page: number) =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.addTodoRequest());

    try {
      await todoService.addTodo(payload);
      fetchTodos(status, page)(dispatch);
      fetchTodoCount()(dispatch);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.addTodoError(error?.response?.data?.message));
      }
    }
  };

export const updateTodo =
  (payload: UpdateTodoPayload, status: string, page: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(actions.updateTodoRequest());

      const updatedTodo = await todoService.updateTodo(payload);

      dispatch(actions.updateTodoSuccess(updatedTodo?.data));
      dispatch(actions.updateTodoStatusSuccess(updatedTodo?.data));

      fetchTodoCount()(dispatch);

      if (status !== TodoLabels.all) {
        fetchTodos(status, page)(dispatch);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.updateTodoError(error?.response?.data?.message));
      }
    }
  };

export const deleteTodo =
  (todoId: string, status: string, page: number) =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.deleteTodoRequest());

    try {
      await todoService.deleteTodo(todoId);
      fetchTodos(status, page)(dispatch);
      fetchTodoCount()(dispatch);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actions.deleteTodoError(error?.response?.data?.message));
      }
    }
  };

export const fetchTodoCount = () => async (dispatch: AppDispatch) => {
  try {
    const result = await todoService.getTodoCount();

    dispatch(actions.countTodoSuccess(result));
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(actions.countTodoError(error?.response?.data?.message));
    }
  }
};
