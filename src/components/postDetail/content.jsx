import React from "react";
import styled from "styled-components";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

// import { getPost } from "../../services";
const DivPost = styled.div`
  background: #ffffff;
  border-radius: 5px 5px 0 0;
  box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.2);
`;
const ImgCover = styled.img`
  width: 100%;
  heigtn: 200px;
  object-fit: scale-down;
  border-radius: 5px 5px 0 0;
`;
const H2Post = styled.h2`
  font-size: 4rem;
  margin: 0.2rem 2rem;
`;
const TagsPost = styled(H2Post)`
  font-size: 1rem;
`;
const ImgContent = styled.img`
  display: block;
  width: 80%;
  margin: 1rem auto;
  border-radius: 5px;
`;
const PostContent = styled.p`
  margin: 0.5rem 2rem;
  text-align: justify;
`;
const UserPostDetail = styled.div`
  margin: 0.2rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ImgUserDetail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;
const H3UserDetail = styled.h3`
  margin: 0.2rem;
  font-weight: 300;
  font-size: 1rem;
`;

export default function Post() {
  return (
    <React.Fragment>
      <DivPost className={`col-7`}>
        <ImgCover
          src={
            "https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2018/07/adventure-time.jpg?fit=1080%2C608&quality=80&ssl=1"
          }
          alt=""
        />
        <H2Post>Adventure Time</H2Post>
        <TagsPost>#java</TagsPost>
        <UserPostDetail>
          <ImgUserDetail
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerD-oeh1ATqpDz6mVeE922n4Kiqj8iyqwXv-HBDlGeFAW9mz14YmJZIxWjhFM6EkM_3I&usqp=CAU"
            }
            alt=""
          />
          <H3UserDetail>Marceline</H3UserDetail>
        </UserPostDetail>
        <ImgContent
          src={"https://cde.laprensa.e3.pe/ima/0/0/2/3/5/235387.jpg"}
          alt=""
        />

        <PostContent>
          Adventure Time (llamada Hora de aventura en Hispanoamérica, Hora de
          aventuras en España) es una serie animada de televisión creada por
          Pendleton Ward para Cartoon Network. La serie sigue las aventuras de
          Finn, un niño (va creciendo con la serie desde los 12 al principio
          hasta los 17 a la actualidad), y Jake, un perro con poderes mágicos
          con los que puede cambiar de forma, crecer y encoger a voluntad, que
          habitan en la post-apocalíptica Tierra de Ooo. A lo largo de la serie
          interactúan con los otros personajes principales de la serie: Princess
          Bubblegum, Ice King y Marceline la reina de los vampiros.
        </PostContent>
      </DivPost>
    </React.Fragment>
  );
  // const [data, setData] = useState({});
  // const { id } = useParams();
  // useEffect(() => {
  //   const request = async () => {
  //     const json = await getPost(id);
  //     setData(json);
  //   };
  //   request();
  // }, []);
  // return (
  //   <React.Fragment>
  //     <div className={`col-5`}>
  //       <img src={data.cover} alt="" />
  //       <h2>{data.title}</h2>
  //       <h5>{data.tags}</h5>
  //       <img src={data.img} alt="" />
  //       <p>{data.posts}</p>
  //     </div>
  //   </React.Fragment>
  // );
}
