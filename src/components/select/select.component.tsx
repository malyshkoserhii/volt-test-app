import * as React from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { ItemRenderer, Select as BlueprintSelect } from '@blueprintjs/select';

import { selectBtn } from './select.styles';
import * as actions from '../../redux/todo/todo-actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types';

export type Option = {
  id: string;
  status: string;
};

const TODO_STATUS: Array<Option> = [
  {
    id: '1',
    status: 'All',
  },
  {
    id: '2',
    status: 'Current',
  },
  {
    id: '3',
    status: 'Completed',
  },
];

const renderStatus: ItemRenderer<Option> = (
  status,
  { handleClick, handleFocus, modifiers }
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={status.id}
      onClick={handleClick}
      onFocus={handleFocus}
      roleStructure="none"
      text={status.status}
    />
  );
};

export const Select: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const todoStatus = useSelector<RootState, Option>(
    (state: RootState) => state.todosData.todoStatus
  );

  const onItemClick = (item: Option) => {
    dispatch(actions.setTodoStatus(item));
  };

  return (
    <BlueprintSelect<Option>
      items={TODO_STATUS}
      itemRenderer={renderStatus}
      filterable={false}
      className={selectBtn}
      noResults={
        <MenuItem
          className={selectBtn}
          disabled={true}
          text="No results."
          roleStructure="listoption"
        />
      }
      onItemSelect={onItemClick}
      popoverProps={{ modifiers: { arrow: { enabled: false } } }}
    >
      <Button
        text={todoStatus?.status}
        rightIcon="chevron-down"
        className={selectBtn}
      />
    </BlueprintSelect>
  );
};
