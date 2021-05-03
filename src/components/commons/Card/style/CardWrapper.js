import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

const CardWrapper = styled.div`
  padding: 14px;
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

`;

export { CardWrapper as default };
