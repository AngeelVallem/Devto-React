import React from 'react'
import styled from 'styled-components'


const CustomButton = styled.button`
${props => props.color &&  `background-color : ${props.color};`}
${props => props.textColor && `color : ${props.textColor};`}
&:hover {
	color : gray
}

`

export default function Button (props) {
	return (
		<CustomButton {...props} className='btn'>
		{props.children}
		</CustomButton>
	)
}