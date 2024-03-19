import { SelectorOptions, TodoLabels, TodoOptions } from '../types/common.type'

export const PER_PAGE = 10

export const TODO_STATUS: Array<SelectorOptions> = [
  {
    label: TodoLabels.all,
    option: TodoOptions.All,
  },
  {
    label: TodoLabels.current,
    option: TodoOptions.Current,
  },
  {
    label: TodoLabels.completed,
    option: TodoOptions.Completed,
  },
]
