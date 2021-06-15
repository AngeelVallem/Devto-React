import React from "react";
import styled from "styled-components";

const DivText = styled.div`
  display: inline-block;
  background: blue;
  width: 200px;
`;
const Text = styled.h3``;

export default function TextNav() {
  return (
    <DivText>
      <Text>Create Post</Text>
    </DivText>
  );
}
