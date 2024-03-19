import * as React from 'react'
import { Button, MenuItem } from '@blueprintjs/core'
import { ItemRenderer, Select as BlueprintSelect } from '@blueprintjs/select'

import { selectBtn } from './select.styles'
import * as actions from '../../redux/todo/todo-actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../types/state.type'
import { RootState } from '../../types'
import { SelectorOptions } from '../../types/common.type'
import { TODO_STATUS } from '../../constants'

const renderStatus: ItemRenderer<SelectorOptions> = (
  status,
  { handleClick, handleFocus, modifiers }
) => {
  if (!modifiers.matchesPredicate) {
    return null
  }
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={status.label}
      onClick={handleClick}
      onFocus={handleFocus}
      roleStructure="none"
      text={status.option}
    />
  )
}

export const Select: React.FC = (): React.ReactNode => {
  const dispatch: AppDispatch = useDispatch()

  const todoStatus = useSelector<RootState, SelectorOptions>(
    (state: RootState) => state.todosData.todoStatus
  )

  const onItemClick = (item: SelectorOptions): void => {
    dispatch(actions.setTodoStatus(item))
  }

  return (
    <BlueprintSelect<SelectorOptions>
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
        text={todoStatus?.option}
        rightIcon="chevron-down"
        className={selectBtn}
      />
    </BlueprintSelect>
  )
}
