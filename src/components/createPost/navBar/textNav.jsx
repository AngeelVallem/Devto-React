import React from "react";
import styled from "styled-components";

const DivText = styled.div`
  width: 200px;
  margin: 0.5rem 2rem 0 1rem;
`;
const Text = styled.h3`
  font-size: 1rem;
  font-weight: 370;
`;

export default function TextNav() {
  return (
    <DivText className={"align-items-end"}>
      <Text>Create Post</Text>
    </DivText>
  );
}
