import React from 'react';
import Box from '../../foundation/layout/Box/index';
import Text from '../../foundation/Text';

export default function NotFoundScreen() {
  return (
    <Box
      flex="1 1 auto"
      display="flex"
      flexDirection="column"
      flexGrow="1"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url('/img/background.jpg')"
    >
      <Box
        backgroundColor="#ffffff"
        textAlign="center"
        padding="10px 20px"
      >

        <Text
          tag="h1"
          variant="h1"
        >
          404
        </Text>
        <Text
          tag="p"
          variant="h4"
        >
          Opa! Foi mal, não encontrei essa página.
        </Text>
      </Box>

    </Box>
  );
}
