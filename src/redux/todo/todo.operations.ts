import { todoService } from '../../services/todo.service';
import { AppDispatch } from '../store';
import * as actions from './todo-actions';

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  dispatch(actions.fetchTodosRequest());

  try {
    const result = await todoService.getAllTodos({ skip: 0, take: 5 });

    dispatch(actions.fetchTodosSuccess(result?.data));
  } catch (error) {
    dispatch(actions.fetchTodosError());
  }
};
