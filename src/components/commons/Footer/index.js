import React from 'react';
import styled from 'styled-components';
import Icons from '../../../theme/Icons';
import Text from '../../foundation/Text';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <Text tag="a" href="https://www.twitter.com" margin="0 20px 0 20px;"><Icons variant="twitter" /></Text>
      <Text tag="a" href="https://www.github.com" margin="0 20px 0 20px;"><Icons variant="github" /></Text>
      <Text tag="a" href="https://www.medium.com" margin="0 20px 0 20px;"><Icons variant="medium" /></Text>
    </FooterWrapper>
  );
}