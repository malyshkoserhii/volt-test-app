import { css } from '@emotion/css';
import { COLORS, FONT_FAMILIES } from '../../themes';

export const item = css`
  display: grid;
  grid-template-columns: 1fr 360px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  background-color: ${COLORS.water};
`;

export const title = css`
  font-family: ${FONT_FAMILIES.robotoMedium};
  font-size: 16px;
`;

export const buttonsWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

export const button = css`
  width: 100px;
  outline: none;
  padding: 4px 0;
`;
