import React from 'react';
import Box from '../../foundation/layout/Box/index';
import Projects from '../../patterns/Projects';

export default function HomeScreen() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Projects />

    </Box>
  );
}
