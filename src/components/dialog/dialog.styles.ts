import { css } from '@emotion/css';
import { COLORS } from '../../themes';

export const footer = css`
  width: 100%;
  padding: 20px 40px;
  background-color: ${COLORS.cyan};
`;

export const dialog = css`
  width: 300px !important;

  @media (min-width: 420px) {
    width: 400px !important;
  }
`;
