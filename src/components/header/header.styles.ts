import { css } from '@emotion/css';

import { COLORS } from '../../themes';
import { FONT_FAMILIES } from '../../themes/fonts';

export const header = css`
  width: 100%;
  padding: 20px;
  background-color: ${COLORS.starCommandBlue};
`;

export const logo = css`
  font-family: ${FONT_FAMILIES.roboto};
`;

export const actionsWrapper = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
