import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
    background:transparent;
    padding: 0;
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
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

    &:disabled,
    &[disabled] {
        cursor: not-allowed;
        opacity: .2;
    }

    ${({ fullWidth }) => fullWidth && css`
        width:100%;
    `}

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

const Button = ({ href, ...props }) => {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
};

export { Button as default };

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};
