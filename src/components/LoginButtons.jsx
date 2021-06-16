
import React from "react";
import styled from 'styled-components';

const CustomButton = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 6px;
  text-align: center;
  color: white;
  font-weight: bold;
  border:none;
`

export default function LoginButtons ({className: classNameProps, text:textProps, style:styleProps}){
  
  const className = classNameProps ? classNameProps : "";
  const text = textProps? textProps: '';
  const style = styleProps ? styleProps : {};

  return (
    <CustomButton type='button' style={style} className={`${className}`}>{text}</CustomButton>
  )
}