import React from "react";
import styled from "styled-components";
import img1 from "./images/icon4.svg";
import imgSearch from "./images/icon3.svg";
// import colors from '../../Globals'

import { useHistory } from "react-router";

const CustomLogo = styled.div`
  width: 54px;
  height: 40px;
  border-radius: 8px;
  box-sizing: border-box;
  background-image: url("https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/84_Dev_logo_logos-512.png");
  background-position: center;
  background-size: cover;
  &:hover {
    opacity: 0.7;
  }
`;
const MenuNav = styled.nav`
  height: 56px;
  box-shadow: 0 1px 1px -1px #333;
  align-self: flex-start;
  width: 100vw;
  background: var(--header-background);
  overflow: hidden;
`;
const SearchBar = styled.input`
  width: 395px;
  height: 40px;
  background-color: #fafafa;
  border-radius: 5px;
  border: #b6bdc3 solid 1px;
`;
const Login = styled.button`
  font-size: 1rem;
  color: #3e49d7;
  padding-top: 8px;
  background-color: Transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: hsl(240, 6%, 87%);
  }
`;

const CustomButton = styled.button`
  background-color: hsl(235, 86%, 48%);
  width: 140px;
  height: 40px;
  border-radius: 7px;
  text-align: center;
  color: white;
  margin-left: 15px;
  font-weight: bold;
`;

const DivFlex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const SidePanel = styled.div`
  height: 100vh; /* Specify a height */
  width: 80vw; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidepanel */
`;
const ListSidePanel = styled.a`
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
  &:hover {
    color: #f1f1f1;
  }
`;

// const CloseButton = styled.a`
//   position: absolute;
//   top: 0;
//   right: 25px;
//   font-size: 36px;
//   margin-left: 50px;
// `;
const heightStyle = {
  height: "57px",
};

const colorWhitesmoke = {
  backgroundColor: "whitesmoke",
};

export default function NavBarsinLoggeo() {
  const history = useHistory();

  const changePage = () => {
    history.push("/login");
  };

  return (
    <header className="sticky-top">
      <MenuNav className="container-fluid bg-white  ">
        <div className="row  h-100">
          <DivFlex className="col-1 ps-3  d-md-none ">
            <SidePanel id="mySidepanel">
              {/* <CloseButton href="javascript:void(0)" onclick="closeNav()">
                &times;
              </CloseButton> */}
              <div
                style={heightStyle}
                class=" d-flex align-items-center border-bottom "
              >
                <h5 class="pt-2 fw-bold ps-4">DEV Community</h5>
              </div>
              <div
                style={colorWhitesmoke}
                className=" my-2 border rounded mx-2"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, vitae assumenda ratione inventore ducimus porro
                unde doloribus est. Itaque harum, rem nam provident dolore
                ducimus quia ipsum, repellendus alias exercitationem ut nemo
                obcaecati, sed enim hic temporibus facilis. Deleniti quis
                doloribus tempora blanditiis eius reiciendis quos laborum alias
                rerum enim?
              </div>

              <div className="d-flex ms-4">
                <img src={img1} alt="" />
                <ListSidePanel href="#">Home</ListSidePanel>
              </div>
              <div className="d-flex ms-4">
                <img src={img1} alt="" />
                <ListSidePanel href="#">Sign In/Up</ListSidePanel>
              </div>
              <div className="d-flex ms-4">
                <img src={img1} alt="" />
                <ListSidePanel href="#">Listings</ListSidePanel>
              </div>
              <div className="d-flex ms-4">
                <img src={img1} alt="" />
                <ListSidePanel href="#">Podcast</ListSidePanel>
              </div>
              <div className="d-flex ms-4">
                <img src={img1} alt="" />
                <ListSidePanel href="#">Videos</ListSidePanel>
              </div>
              <div className="d-flex ms-4">
                <img src={img1} alt="" />
                <ListSidePanel href="#">Tags</ListSidePanel>
              </div>
            </SidePanel>

            <input type="image" src={img1} alt="" />
          </DivFlex>
          <DivFlex className=" justify-content-end ms-4 px-0 col-2  col-md-1 ">
            <CustomLogo className="" onClick={changePage}></CustomLogo>
          </DivFlex>
          <DivFlex className="col-3 col-md-5 justify-content-start ps-0">
            <img className=" ms-5 ps-4  d-md-none" src={imgSearch} alt="" />
            <form className=" d-none d-md-block ps-3">
              <SearchBar type="text" name="q" placeholder="Search..." />
            </form>
          </DivFlex>
          <DivFlex className=" px-0 col-5 col-md-5 d-flex justify-content-end">
            <Login
              href=""
              className="d-none d-md-inline d-flex fw-bold rounded-pill"
            >
              Log in
            </Login>
            <CustomButton className="">Create account</CustomButton>
          </DivFlex>
        </div>
      </MenuNav>
    </header>
  );
}
