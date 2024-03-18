import { PaginationData, Todo, TodoCount } from '.';
import { store } from '../redux/store';
import { SelectorOptions } from './common.type';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
  todosData: {
    todo: Todo;
    todos: Array<Todo>;
    todoCount: TodoCount;
    todoStatus: SelectorOptions;
    paginationData: PaginationData;
    page: number;
    loading: boolean;
  };
}
