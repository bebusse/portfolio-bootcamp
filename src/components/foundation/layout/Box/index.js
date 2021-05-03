import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexGrow')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    ${propToStyle('margin')}
    ${propToStyle('textAlign')}
    ${propToStyle('position')}
    ${propToStyle('top')}
    ${propToStyle('right')}
    ${propToStyle('height')}
    ${propToStyle('width')}
    ${propToStyle('minHeight')}
    ${propToStyle('zIndex')}
`;

export { Box as default };
