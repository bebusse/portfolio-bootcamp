import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const ButtonGhost = css`
    background:transparent;
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

export const ButtonDefault = css`
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity:1;
    border-radius: 8px;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${propToStyle('display')}
    ${propToStyle('margin')}

    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariantsMap.smallestException}
        `,
    md: css`
            ${TextStyleVariantsMap.paragraph1}
        `,
  })}
`;
