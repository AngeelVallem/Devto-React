import React from "react";
import styled from "styled-components";

const Image = styled.img`
	object-fit : cover;
	height: 150px;
`;

export default function CardImage(props){
  return (
    <Image
    className='card-img-top'
      src="https://res.cloudinary.com/practicaldev/image/fetch/s--sZkXA8YU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lgxazdfz1fw4s3jh2285.jpg"
      alt="card"
    />

  );
}
