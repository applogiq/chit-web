import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 0.5rem;
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '3rem')};
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  background-color: white;
 border: none;
`;

export default function ({
  onClick,
  onChange,
  placeholder,
  name,
  value,
  type,
  onMouseEnter,
  onMouseLeave,
  onBlur,
  width,
  height,
  ...others
}) {
  return (
    <InputStyled
      value={value}
      name={name}
      onClick={onClick}
      onChange={onChange}
      type={type}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      width={width}
      height={height}
      placeholder={placeholder}
      {...others}
    />
  );
};
