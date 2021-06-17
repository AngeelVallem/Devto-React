import React from 'react'
import styled from 'styled-components'

const CustomItem = styled.li`
list-decoration : none;
${props => props.margin && `${props.margin};`}
margin-left : 30px
`



export default function ListItem ({img,url,styles,text},props) {
	return (
		<CustomItem {...props}>
		<img  src={img} alt="" />
		<a href={url} className={` ${styles}`} style={{textDecoration : 'none' , color : '#000'}}>
		  {text}
		</a>
	      </CustomItem>	
	)
}