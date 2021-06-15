import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import NavPost from "../../components/createPost/navBar";

const CustomBodyBg = styled.body`
  height: 100vh;
  width: 100vw;
  background: #eef0f1;
`;

const NewPost = () => {
  return (
    <CustomBodyBg>
      <NavPost>a</NavPost>
    </CustomBodyBg>
  );
};

export default NewPost;
