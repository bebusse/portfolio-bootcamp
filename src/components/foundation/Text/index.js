import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

function TextCss(theme, variant) {
  return css`    
        font-size: ${get(theme, `typographyVariants.${variant}.fontSize`)};
        font-weight: ${get(theme, `typographyVariants.${variant}.fontWeight`)};
        line-height: ${get(theme, `typographyVariants.${variant}.lineHeight`)};
    `;
}

function TextCssObject(theme, variant) {
  return {
    fontSize: get(theme, `typographyVariants.${variant}.fontSize`),
    fontWeight: get(theme, `typographyVariants.${variant}.fontWeight`),
    lineHeight: get(theme, `typographyVariants.${variant}.lineHeight`),
  };
}

export const TextStyleVariantsMap = {
  h1: css`${({ theme }) => TextCss(theme, 'h1')}`,
  h2: css`${({ theme }) => TextCss(theme, 'h2')}`,
  h3: css`${({ theme }) => TextCss(theme, 'h3')}`,
  h4: css`${({ theme }) => TextCss(theme, 'h4')}`,
  text: css`${({ theme }) => TextCss(theme, 'text')}`,
  small: css`${({ theme }) => TextCss(theme, 'small')}`,
};

function TextStyleVariants() {
  return ({ theme, variant }) => {
    if (typeof variant === 'string' || typeof variant === 'number') {
      return TextCssObject(theme, variant);
    }
    if (typeof variant === 'object') {
      const propStyledObject = {
        xs: TextCssObject(theme, variant.xs),
        sm: TextCssObject(theme, variant.sm),
        md: TextCssObject(theme, variant.md),
        lg: TextCssObject(theme, variant.lg),
        xl: TextCssObject(theme, variant.xl),
      };
      return breakpointsMedia(propStyledObject);
    }
    return '';
  };
}

const TextBase = styled.span`
    /* ${({ variant }) => TextStyleVariantsMap[variant]}; */
    ${TextStyleVariants()}
    ${propToStyle('textAlign')}
    ${propToStyle('margin')}
    ${propToStyle('display')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  // href = href != null ? href={}:'';
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  variant: 'text',
  children: '',
};
