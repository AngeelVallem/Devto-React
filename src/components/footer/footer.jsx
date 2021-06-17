import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background: #d2d6db;
  height: 50vh;
`;
const FooterUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterUl></FooterUl>
    </FooterDiv>
  );
}
