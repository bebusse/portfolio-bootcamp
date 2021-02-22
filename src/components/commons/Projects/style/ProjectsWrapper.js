import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const ProjectsWrapper = styled.div`
  ${breakpointsMedia({
    md: css`
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

export { ProjectsWrapper as default };