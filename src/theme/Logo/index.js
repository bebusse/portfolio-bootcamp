import React from 'react';
import Text from '../../components/foundation/Text';

export default function Logo() {
  const text = '<Bernardo/>';
  return (
    <Text
      variant={{ xs: 'text', md: 'h2' }}
      tag="p"
    >
      {text}
    </Text>
  );
}
