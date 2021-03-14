import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import Text, { TextStyleVariantsMap } from '../../../foundation/Text';

const NavWrapper = styled.nav`
  margin: 0;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  

  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.small}
    `,
    md: css`
      ${TextStyleVariantsMap.h4}
    `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }
  }

`;

export default function NavBar({ onOpenContactModal }) {
  const links = [
    {
      texto: 'Sobre Mim',
      url: '/sobre',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];
  return (
    <NavWrapper>
      {links.map((link) => (
        <li key={link.url}>
          <Text
            variant="text"
            tag="a"
            href={link.url}
            onClick={(event) => {
              event.preventDefault();
              onOpenContactModal();
            }}
          >
            {link.texto}
          </Text>
        </li>
      ))}
    </NavWrapper>
  );
}

NavBar.propTypes = {
  onOpenContactModal: PropTypes.func.isRequired,
};
