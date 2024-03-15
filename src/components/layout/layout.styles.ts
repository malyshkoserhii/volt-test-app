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
  flex-grow: 1;
  padding: 20px;
`;
