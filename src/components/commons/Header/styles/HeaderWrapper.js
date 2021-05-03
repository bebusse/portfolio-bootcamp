import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
// import { TextStyleVariantsMap } from '../../../foundation/Text';

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
    `,
    lg: css`
    `,
    xl: css`
    `,
  })}
`;

export { HeaderWrapper as default };
