import { css } from '@emotion/css';

export const container = css`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;

export const childrenWrapper = css`
  padding: 20px;
  min-height: min-content;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
