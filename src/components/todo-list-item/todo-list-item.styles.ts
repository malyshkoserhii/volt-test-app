import { css } from '@emotion/css'
import { COLORS, FONT_FAMILIES } from '../../themes'

export const item = css`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  background-color: ${COLORS.cyan};

  border: 1px solid ${COLORS.dimGrey};
  border-radius: 6px;

  @media (min-width: 420px) {
    grid-template-columns: 200px 1fr 200px;
    column-gap: 10px;
  }
`

export const title = css`
  display: block;
  font-family: ${FONT_FAMILIES.robotoBold};
  font-size: 16px;
  font-weight: normal;

  width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const description = css`
  margin: 0;
  display: block;
  font-family: ${FONT_FAMILIES.robotoMedium};
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const compeltedTodo = css`
  text-decoration: line-through;
  font-family: ${FONT_FAMILIES.roboto} !important;
`

export const buttonsWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  justify-items: center;
  align-items: center;
  width: 100%;
`

export const button = css`
  width: 50px;
  outline: none;
  padding: 4px 0;

  @media (min-width: 420px) {
    width: 100px !important;
  }
`
