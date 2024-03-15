import { css } from '@emotion/css';
import { FONT_FAMILIES } from '../../themes';
// import { COLORS } from '../../themes';

export const list = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 40px);
  row-gap: 10px;
`;

export const inputWrapper = css`
  display: grid;
  grid-template-rows: max-content;
  row-gap: 10px;
`;

export const wrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const form = css`
  display: grid;
  row-gap: 20px;
  grid-template-rows: max-content 30px;
`;

export const checkboxLabel = css`
  margin: 0 !important;
  font-family: ${FONT_FAMILIES.roboto} !important;
`;

export const checkboxSection = css`
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: flex-end;
`;

export const checkbox = css`
  width: 14px !important;
  margin-bottom: 0;
  margin-right: 10px;
  padding: 0;
  outline: none !important;
`;

export const btnWrapper = css`
  display: flex;
  justify-content: space-between;
  justify-self: flex-end;
  width: 120px;
`;
