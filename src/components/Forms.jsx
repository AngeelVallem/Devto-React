
import React from "react";
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
`
const Input = styled.input`
  background-color: #f9fafa;
`

export default function FormsComponent (props){
  
  

  return (
    
      <Div className={props.className} style={props.style}>
        <label className="form-label fw-bold">{props.text}</label>
        <Input 
        placeholder={props.placeholder}
        required
        value={props.value}
        onChange={props.onChange}
        type={props.type} 
        className="form-control" 
         />
      </Div>
  
  )
}