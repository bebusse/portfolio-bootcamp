import React from 'react';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/foundation/layout/Box/index';
import Header from '../src/components/commons/Header';
import Cover from '../src/components/commons/Cover';
import Projects from '../src/components/commons/Projects';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover />
      <Header />
      <Projects />

      <Footer />
    </Box>
  );
}
