import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

function TextCss(theme,variant)
{
    return css`    
        font-size: ${get(theme,`typographyVariants.${variant}.fontSize`)};
        font-weight: ${get(theme,`typographyVariants.${variant}.fontWeight`)};
        line-height: ${get(theme,`typographyVariants.${variant}.lineHeight`)};
    `;
}

export const TextStyleVariantsMap = {
    title: css`${({theme}) => TextCss(theme,'title')}`,
    titleXS: css`${({theme}) => TextCss(theme,'titleXS')}`,
    subTitle: css`${({theme}) => TextCss(theme,'subTitle')}`,
    paragraph1: css`${({theme}) => TextCss(theme,'paragraph1')}`,
    paragraph2: css`${({theme}) => TextCss(theme,'paragraph2')}`,
    smallestException: css`${({theme}) => TextCss(theme,'smallestException')}`,
}

const TextBase = styled.span`
    ${({variant}) => TextStyleVariantsMap[variant]};
    ${propToStyle('textAlign')}
`;

export default function Text({tag, variant, children, ...props}) {
    // href = href != null ? href={}:'';
    return (
        <TextBase
            as={tag}
            variant={variant}
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
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}