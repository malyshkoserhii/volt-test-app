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
  todo: {
    todos: Array<Todo>;
    todoStatus: Option;
  };
}
