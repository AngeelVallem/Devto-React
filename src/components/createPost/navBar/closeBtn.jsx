import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const DivBtn = styled.div`
  width: 50px;
  display: inline-block;
`;
const Button = styled.button`
  border: none;
`;

export default function CloseBtn() {
  const history = useHistory();
  return (
    <DivBtn>
      <Button onClick={() => history.push("/")}>x</Button>
    </DivBtn>
  );
}
