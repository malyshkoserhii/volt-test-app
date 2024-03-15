import { Option } from '../components/select';

export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

export type ModalState = {
  openModal: () => void;
  closeModal: () => void;
  modal: {
    modal: boolean;
  };
};

export interface RootState {
  todo: {
    todoStatus: Option;
  };
}
