
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import imgMenu from '../../components/NavBarsinLoggeo/images/icon4.svg';
import imgSearch from '../../components/NavBarsinLoggeo/images/icon3.svg';
import img1 from '../../components/NavBarsinLoggeo/images/icon1.svg';
import img2 from '../../components/NavBarsinLoggeo/images/icon2.svg';
import PurpleButton from '../PurpleButton';
import '../../css/index.css'
import { useHistory } from "react-router";
import AvatarDropdown from '../../components/AvatarDropdown'



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
  

`
const SidePanel = styled.div`
  height: 100vh; /* Specify a height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
 
 `
 const ListSidePanel = styled.a`
  padding: 20px 8px 8px 15px;
  text-decoration: none;
  font-size: 17px;
  color: black;
  display: block;
  transition: 0.3s;
  &:hover{
    color: #3E49D7;
  }
 `

 const CloseButton = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
 `
const heightStyle = {
  height: "57px"
}

const colorWhitesmoke = {
  backgroundColor: 'whitesmoke'
}
const colorPurple = {
  color:  '#3E49D7'
}

export default function NavBarLoggeado(){

  const divWith = {
    width: '0vw'
  }
  const divWith2 = {
    width: '80vw'
  }
  const[width, setWidth] = useState(divWith)

  const themeLight = {
    opacity: '0.5'
  }
  const themeOpacity = {
    opacity: '1'
  }
  
  function widthOpenFunction (){
    setWidth(divWith2)  
  }

  function widthCloseFunction(){
    setWidth(divWith)
  }

  const history = useHistory();

  const changePage = () => {
    history.push("/");
  }

  
  const createPost = () => {
    console.log('aver')
    history.push("/new");
  }

  return (
    <header className="sticky-top">
      <MenuNav className="container-fluid bg-white  ">
        <div className="row  h-100">
        <DivFlex className="col-1 ps-3  d-md-none ">

          <SidePanel id="mySidepanel" style={width}>
              <CloseButton onClick={widthCloseFunction}>&times;</CloseButton>
                <div style={heightStyle} className=" d-flex align-items-center border-bottom "><h5 className="pt-2 fw-bold ps-4">DEV Community</h5></div>
                
                  
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
            <input type="image" src= {imgMenu} onClick={widthOpenFunction} alt=""/>
          
          </DivFlex>
          <DivFlex className=" justify-content-end ms-4 px-0 col-2  col-md-1 ">
            <CustomLogo className="" onClick={changePage} ></CustomLogo>  
          </DivFlex>
          <DivFlex className="col-3 col-md-5 justify-content-start ps-0">
            <img className=" ms-5 ps-4  d-md-none" src={imgSearch} alt="" />
            <form className=" d-none d-md-block ps-3">
              <SearchBar type="text" name="q" placeholder="Search..." />
            </form>
          </DivFlex>
          <DivFlex className=" px-0 col-5 col-md-5 d-flex justify-content-end">
            <PurpleButton
              className=" me-4 d-none d-md-block"
              text="Create post"
              onClick={createPost}
            />
            <img className="me-4" src= {img1} alt=""/>
            <img className="me-4" src= {img2} alt=""/>
            <AvatarDropdown/>

            <img className="me-4" src={img1} alt="" />
            <img className="me-4" src={img2} alt="" />
            <Avatar className="me-2"></Avatar>
          </DivFlex>
        </div>
      </MenuNav>
    </header>
  );
}
