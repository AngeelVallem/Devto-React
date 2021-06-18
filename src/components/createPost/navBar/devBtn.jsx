import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Logo from "../../../elements/devLogo.png";

const SpanLogo = styled.span``;

const LogoDev = styled.a`
  cursor: pointer;
  height: 40px;
`;
const ImgDevLogo = styled.img`
  height: inherit;
`;

export default function DevBtn() {
  const history = useHistory();
  return (
    <SpanLogo>
      <LogoDev onClick={() => history.push("/")}>
        <ImgDevLogo src={Logo} alt={""} />
      </LogoDev>
    </SpanLogo>
  );
}
