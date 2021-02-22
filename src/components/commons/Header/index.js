// import {MenuWrapper} from '../Menu/styles/MenuWrapper.js';
import React from 'react';
import Logo from '../../../theme/Logo';
// import { Button } from '../Button/index';
// import Text from '../../foundation/Text';
import HeaderWrapper from './styles/HeaderWrapper';
import NavBar from './NavBar';
import Grid from '../../foundation/layout/Grid';

export default function Header() {
  return (
    <HeaderWrapper>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 6, md: 2 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Logo />
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 6 }}
            value={{ xs: 6, md: 3 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <NavBar />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </HeaderWrapper>
  );
}
