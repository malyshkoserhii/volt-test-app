import { css } from '@emotion/css';

export const container = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;

export const childrenWrapper = css`
  padding: 20px;
  flex-grow: 1;
`;
