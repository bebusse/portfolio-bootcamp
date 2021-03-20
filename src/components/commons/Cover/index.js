// background with image
// Title & Subtitle
import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';
import Box from '../../foundation/layout/Box';

const CoverWrapper = styled.header`
  background-image: url('/img/cover-background.jpg');
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  padding: 14px;
  position: relative;
  /* padding-right: 28px;
  padding-left: 28px; */
  p {
    text-align: center;
  }
  div {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${breakpointsMedia({
    xs: css`
      min-height: 300px;
    `,
    md: css`
      justify-content: flex-start;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      ${'' /* max-width: 768px; */}
    `,
    lg: css`
      ${'' /* max-width: 1160px; */}
      min-height: 500px;
    `,
    xl: css`
      ${'' /* max-width: 1222px; */}
    `,
  })}
`;

export default function Cover() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CoverWrapper
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/img/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Box>
        <Text tag="p" variant="h1">Bernardo Busse</Text>
        <Text tag="p" variant="h2">Portfolio</Text>
      </Box>
    </CoverWrapper>
  );
}
