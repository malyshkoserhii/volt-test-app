import { css } from '@emotion/css';
import { FONT_FAMILIES } from '../../themes';

export const container = css`
  display: flex;
  justify-content: space-between;
  width: 260px;
  padding: 10px 0;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const title = css`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  font-family: ${FONT_FAMILIES.robotoMedium};
  font-size: 18px;
  font-weight: normal;
`;

export const number = css`
  display: flex;
  justify-content: space-between;
  font-family: ${FONT_FAMILIES.roboto};
  font-size: 16px;
  font-weight: normal;
`;
