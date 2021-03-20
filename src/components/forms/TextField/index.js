import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  
  ${({ isInvalid }) => {
    if (isInvalid) {
      return css`
        color: ${({ theme }) => theme.colors.error.main.color};
        border: 1px solid ${({ theme }) => theme.colors.error.main.color};
      `;
    }
    return css`
        border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
    `;
  }}

`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  isInvalid,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isInvalid={isInvalid}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool,
};

TextField.defaultProps = {
  isInvalid: false,
};
