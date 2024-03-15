import { css } from '@emotion/css';
import { COLORS, FONT_FAMILIES } from '../../themes';

export const section = css`
  // margin-bottom: 20px;
`;

export const labelStyles = css`
  margin-bottom: 6px;
  font-family: ${FONT_FAMILIES.robotoMedium};
  font-size: 14px;
`;

export const textarea = css`
  width: 100%;
  padding: 10px;
  font-family: ${FONT_FAMILIES.roboto};
  border: 1px solid ${COLORS.eerieBlack};
  border-radius: 6px !important;
  outline: none !important;
  resize: none;

  &:focus {
    outline: 1px solid ${COLORS.cyan} !important;
  }
`;
