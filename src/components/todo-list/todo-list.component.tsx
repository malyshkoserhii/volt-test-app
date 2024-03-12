import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types';
import { TodoListItem } from '../todo-list-item';
import { list } from './todo-list.styles';
import * as actions from '../../redux/modal/modal-actions';

const DATA = [
  {
    id: 'd1ec20bf-9962-488b-9d02-c67e2533d54c',
    title: 'My 8 todo',
    description: 'Complete 8 task!',
    completed: true,
    created_at: '2024-03-11T13:16:03.077Z',
    updated_at: '2024-03-11T13:16:03.077Z',
  },
  {
    id: 'e258d279-71e8-4c65-b3d9-64d132b6d8cf',
    title: 'My 7 todo',
    description: 'Complete 7 task!',
    completed: true,
    created_at: '2024-03-11T13:15:58.369Z',
    updated_at: '2024-03-11T13:15:58.369Z',
  },
];

export const TodoList = () => {
  const dispatch: AppDispatch = useDispatch();

  const isModalOpen = useSelector<RootState, boolean>(
    (state: RootState) => state.modal.modal
  );

  console.log('isModalOpen: ', isModalOpen);

  const onDelete = () => {
    dispatch(actions.openModal());
  };
  return (
    <ul className={list}>
      {DATA.map((todo) => {
        return <TodoListItem key={todo?.id} todo={todo} onDelete={onDelete} />;
      })}
    </ul>
  );
};