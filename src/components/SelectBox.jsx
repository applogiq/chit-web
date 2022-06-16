import React from 'react';
import styled from 'styled-components';

const SelectBoxStyled = styled.select`
  border: none;
  padding: ${(props) => props.padding}; 
 margin: ${(props) => props.margin}; 
  border-radius: 5px;
  background-color: white;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '3rem')};
  &:focus {
    border: 0.5px solid #0000;
    
  }
`;

function SelectBox({
  name, onClick, onChange, value, children, ...others
}) {
  return (
    <SelectBoxStyled
      name={name}
      className="dropdown-btn"
      value={value}
      onChange={onChange}
      {...others}
    >
      {children || <option>Options...</option>}
    </SelectBoxStyled>
  );
}
export default SelectBox;
