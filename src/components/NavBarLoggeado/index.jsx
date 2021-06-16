import React from "react";
import styled from "styled-components";
import imgMenu from "../../components/NavBarsinLoggeo/images/icon4.svg";
import imgSearch from "../../components/NavBarsinLoggeo/images/icon3.svg";
import img1 from "../../components/NavBarsinLoggeo/images/icon1.svg";
import img2 from "../../components/NavBarsinLoggeo/images/icon2.svg";

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
// const Login = styled.button`
//   font-size: 1rem;
//   color: #3e49d7;
//   padding-top: 8px;
//   background-color: Transparent;
//   border: none;
//   cursor: pointer;
//   overflow: hidden;
//   &:hover {
//     background-color: hsl(240, 6%, 87%);
//   }
// `;

const CustomButton = styled.button`
  background-color: hsl(235, 86%, 48%);
  width: 120px;
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

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("https://res.cloudinary.com/practicaldev/image/fetch/s--4jmu4dyU--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/590734/31d54d9d-b30a-40f4-afcc-3aa60880a06c.png");
  background-size: cover;
  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default function NavBarLoggeado() {
  return (
    <header className="sticky-top">
      <MenuNav className="container-fluid bg-white  ">
        <div className="row  h-100">
          <DivFlex className="col-1 ps-3  d-md-none ">
            <img src={imgMenu} alt="" />
          </DivFlex>
          <DivFlex className=" justify-content-end ms-4 px-0 col-2  col-md-1 ">
            <CustomLogo className="" target="_self"></CustomLogo>
          </DivFlex>
          <DivFlex className="col-3 col-md-5 justify-content-start ps-0">
            <img className=" ms-5 ps-4  d-md-none" src={imgSearch} alt="" />
            <form className=" d-none d-md-block ps-3">
              <SearchBar type="text" name="q" placeholder="Search..." />
            </form>
          </DivFlex>
          <DivFlex className=" px-0 col-5 col-md-5 d-flex justify-content-end">
            <CustomButton className=" me-4 d-none d-md-block">
              Create post
            </CustomButton>

            <img className="me-4" src={img1} alt="" />
            <img className="me-4" src={img2} alt="" />
            <Avatar className="me-2"></Avatar>
          </DivFlex>
        </div>
      </MenuNav>
    </header>
  );
}
