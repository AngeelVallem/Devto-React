import React from "react";
import styled from "styled-components";

import DevBtn from "./devBtn"; //dev.to logo that is a button linked to home
import TextNav from "./textNav"; //text "Create a post"in the navbar
import EditText from "./editText"; //"edit, preview" nav that apears up
import CloseBtn from "./closeBtn"; //close button at navbar

const CustomNavPost = styled.div`
  height: 56px;
  width: 92vw;
  background: magenta;
`;

export default function NavPost() {
  return (
    <CustomNavPost>
      <DevBtn />
      <TextNav />
      <EditText />
      <CloseBtn />
    </CustomNavPost>
  );
}
