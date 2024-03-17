import { css } from '@emotion/css';
import { COLORS, FONT_FAMILIES } from '../../themes';

export const container = css`
  padding: 10px 0;
`;

export const paragraph = css`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-family: ${FONT_FAMILIES.roboto};
  color: ${COLORS.dimGrey};
  font-size: 18px;
  text-align: center;
`;
