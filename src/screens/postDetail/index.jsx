import React from "react";
import styled from "styled-components";
import Post from "../../components/postDetail/content";

import NavBarLoggeado from "../../components/NavBarLoggeado/index";
import Footer from "../../components/Footer/footer";

const ContainerPost = styled.div`
  background: #eef0f1;
  padding-top: 1px;
`;

export default function PostDetail(newPost) {
  return (
    <React.Fragment>
      <NavBarLoggeado />
      <ContainerPost className={`flex-container mx-auto`}>
        <div className={`row g-1 my-1 mx-auto`}>
          <div className={`col-1`}>1</div>
          <Post />
          <div className={`col-2`}>3</div>
        </div>
      </ContainerPost>
      <Footer></Footer>
    </React.Fragment>
  );
}
