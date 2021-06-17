import React from 'react'
import styled from 'styled-components'

const CustomImage = styled.img`
${props => props.size && `height: ${props.size}; width : ${props.size}; `}
${props => props.circle && 'border-radius : 1rem;'}
`

export default function Image (props) {
	 return(
		<CustomImage  {...props}/>
	 )
}