import React from "react";
import styled from "styled-components";

const NavEdit = styled.nav`
  display: inline-block;
  background: green;
  width: 200px;
`;
const UlEdit = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const LiEdit = styled.li`
  width: auto;
  padding 0 5px;
`;

export default function EditText() {
  return (
    <NavEdit>
      <UlEdit>
        <LiEdit>Edit</LiEdit>
        <LiEdit>Preview</LiEdit>
      </UlEdit>
    </NavEdit>
  );
}
