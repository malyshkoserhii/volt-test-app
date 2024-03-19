import { css } from '@emotion/css'

import { COLORS } from '../../themes'
import { FONT_FAMILIES } from '../../themes/fonts'

export const header = css`
  width: 100%;
  padding: 20px 30px 20px 20px;
  background-color: ${COLORS.starCommandBlue};
`

export const logo = css`
  font-family: ${FONT_FAMILIES.robotoBold};
  font-size: 20px;
  margin-bottom: 20px;
`

export const actionsWrapper = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
