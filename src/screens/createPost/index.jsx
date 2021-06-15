import React from "react";
import styled from "styled-components";

import NavPost from "../../components/createPost/navBar/navBar";

const CustomBodyBg = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eef0f1;
`;

const NewPost = () => {
  return (
    <CustomBodyBg>
      <NavPost></NavPost>
    </CustomBodyBg>
  );
};

export default NewPost;
