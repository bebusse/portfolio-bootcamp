import { css } from 'styled-components';
import { breakpoints } from '../index';

function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
            @media screen and (min-width:${breakpoints[breakpointName]}px) {
                ${cssByBreakpoints[breakpointName]}
            }
        `);
}

export { breakpointsMedia as default };
