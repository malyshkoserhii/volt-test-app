import { Todo } from '.';
import { Option } from '../components/select';

export type ModalState = {
  openModal: () => void;
  closeModal: () => void;
  modal: {
    modal: boolean;
  };
};

export interface RootState {
  modal: boolean;
  todosData: {
    todo: Todo;
    todos: Array<Todo>;
    todoStatus: Option;
  };
}
