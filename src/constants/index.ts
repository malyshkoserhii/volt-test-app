import { SelectorOptions } from '../types/common.type';

export const PER_PAGE = 10;

export const TODO_STATUS: Array<SelectorOptions> = [
  {
    label: 'all',
    option: 'All',
  },
  {
    label: 'current',
    option: 'Current',
  },
  {
    label: 'completed',
    option: 'Completed',
  },
];
