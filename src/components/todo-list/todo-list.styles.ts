import { css } from '@emotion/css'

export const list = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 50px);
  row-gap: 10px;
  margin-bottom: 10px;
`
