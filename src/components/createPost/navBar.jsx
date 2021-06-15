import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Logo from "../../elements/devLogo.png";

const CustomNavPost = styled.div`
  height: 56px;
  width: 100vw;
  background: magenta;
  padding: 2rem;
`;
const LogoDev = styled.a`
  cursor: pointer;
`;
const SpanLogo = styled.span`
  height: 40px;
  width: 50px;
  margin: 13px 2rem;
`;

const NavPost = () => {
  const history = useHistory();
  return (
    <CustomNavPost className={`d-flex `}>
      <SpanLogo>
        <LogoDev onClick={() => history.push("/")}>
          <img src={Logo} height="40px" />
        </LogoDev>
      </SpanLogo>
      {/* <h3>Create Post</h3> */}
    </CustomNavPost>
  );
};

export default NavPost;
