
import React from "react";
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: hsl(235, 86%, 48%);
  height: 40px;
  border-radius: 7px;
  text-align: center;
  color: white;
  font-weight: bold;
`


export default function PurpleButton({ type, onClick:onClickProps, className: classNameProps, text:textProps, style:styleProps }) {
  const className = classNameProps ? classNameProps : "";
  const text = textProps? textProps: '';
  const style = styleProps ? styleProps : {};
  const functionOnClick = onClickProps ? onClickProps : ''

  
  
  return (
    
    <CustomButton onClick={functionOnClick} type='submit' style={style} className={`${className}`}>{text}</CustomButton>

  );
}

