import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background: #d2d6db;
  height: 50vh;
`;
const FooterUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;
const FooterLi = styled.li`
  padding: 0 0.5rem;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterUl>
        <FooterLi type="button">Home</FooterLi>
        <FooterLi type="button">Reading List</FooterLi>
        <FooterLi type="button">Listings</FooterLi>
        <FooterLi type="button">Podcast</FooterLi>
        <FooterLi type="button">Videos</FooterLi>
        <FooterLi type="button">Tags</FooterLi>
        <FooterLi type="button">Code of Conduct</FooterLi>
        <FooterLi type="button">FAQ</FooterLi>
      </FooterUl>
      <FooterUl>
        <FooterLi type="button">DEV Shop</FooterLi>
        <FooterLi type="button">Sponsors</FooterLi>
        <FooterLi type="button">About</FooterLi>
        <FooterLi type="button">Privacy Policy</FooterLi>
        <FooterLi type="button">Terms of use</FooterLi>
        <FooterLi type="button">Contact</FooterLi>
        <FooterLi type="button">Create Post</FooterLi>
      </FooterUl>
    </FooterDiv>
  );
}
