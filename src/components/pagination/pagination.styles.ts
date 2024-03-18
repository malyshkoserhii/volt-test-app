import { css } from '@emotion/css';
import { COLORS, FONT_FAMILIES } from '../../themes';

export const paginationWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const container = css`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style-type: none;

  & li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    font-family: ${FONT_FAMILIES.roboto};
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 7px;
    border: ${COLORS.dimGrey} 1px solid;
    color: ${COLORS.eerieBlack};
    cursor: pointer;

    @media (min-width: 768px) {
      gap: 10px;
      font-size: 16px;
      padding: 8px 14px;
      border-radius: 7px;
    }
  }

  & li.previous a,
  & li.next a,
  & li.break a {
    border-color: 1 solid ${COLORS.dimGrey};
  }

  & li.selected a {
    background-color: ${COLORS.starCommandBlue};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }

  & li.disabled a {
    color: grey;
  }

  &li.disable,
  & li.disabled a {
    cursor: default;
  }
`;

export const pageClassName = css`
  border-radius: 7px;
  padding: 0.1rem 1rem;
  border: gray 1px solid;
  cursor: pointer;
`;

export const activeClassName = css`
  background-color: #0366d6;
  border-color: transparent;
  color: white;
  min-width: 32px;
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
