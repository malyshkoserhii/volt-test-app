export type PaginationSelected = {
  selected: number
}

export type SelectorOptions = {
  label: string
  option: string
}

export enum TodoLabels {
  all = 'all',
  current = 'current',
  completed = 'completed',
}

export enum TodoOptions {
  All = 'All',
  Current = 'Current',
  Completed = 'Completed',
}

export type MarginPagesDisplayed = {
  smallMobile: number
  largeMobile: number
  tablet: number
  desktop: number
}

export type MarginPagesDisplayedRes = {
  type: keyof MarginPagesDisplayed
  result: boolean
}
