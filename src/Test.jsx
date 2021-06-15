import React from 'react'
import styled from 'styled-components'


const CustomButton = styled.button`
${props => props.color && `background-color : ${props.color}`}
`

const Button = (props) => {
	return  <CustomButton {...props}>click me</CustomButton>
}

export default Button
