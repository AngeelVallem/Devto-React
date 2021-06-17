import React from "react";
import styled from "styled-components";

const Image = styled.img`
	object-fit : cover;
	height: 150px;
`;

export default function CardImage({img}){
  return (
    <Image
    className='card-img-top'
      src={img}
      alt="card"
    />

  );
}
