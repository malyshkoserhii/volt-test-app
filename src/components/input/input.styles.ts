import { css } from '@emotion/css';
import { COLORS, FONT_FAMILIES } from '../../themes';

export const labelStyles = css`
  font-family: ${FONT_FAMILIES.robotoMedium};
  font-size: 14px;
  margin-bottom: 6px;
`;

export const inputStyles = css`
  width: 100%;
  padding: 4px 10px;
  font-family: ${FONT_FAMILIES.roboto};
  font-size: 14px;
  line-height: 18px;
  border: 1px solid ${COLORS.eerieBlack};
  border-radius: 6px !important;
  outline: none !important;

  &:focus {
    outline: 1px solid ${COLORS.cyan} !important;
  }
`;

export const errorStyles = css`
  font-family: ${FONT_FAMILIES.roboto};
  font-size: 10px;
  line-heigh: 10px;
  color: ${COLORS.internationalOrange};
  margin-top: 4px;
`;

export const dummy = css`
  display: block;
  height: 13px;
  margin-top: 4px;
`;
