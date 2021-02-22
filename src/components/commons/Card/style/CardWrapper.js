import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

const CardWrapper = styled.div`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;

  p {
    ${breakpointsMedia({
    xs: css`
        text-align: center;
    `,
  })}
  }

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.small}
    `,
    md: css`
      ${TextStyleVariantsMap.text}
    `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }
  }

`;

export { CardWrapper as default };
