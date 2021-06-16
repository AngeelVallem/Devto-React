
import React, { useState } from "react";
import styled from 'styled-components';

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
const DropdownContent = styled.ul`

  width: 20vw;
  background-color: white;
  border: 2px solid rgb(155, 144, 144);
  position: relative;
  top:12vw;
  
  -webkit-box-shadow: 5px 5px black;
          box-shadow: 5px 5px black;

`

export default function AvatarDropdown() {

  
  const [display, setDisplay] = useState('d-none')

  function toggle() {
    console.log('aqui')
    const isDisplay = display=== 'd-none'? 'd-inline':'d-none'    
    setDisplay(isDisplay)
 
  }

  return (
    <React.Fragment>
      <Avatar className="me-2" 
      onMouseEnter={toggle}
       ></Avatar>

      
      <div 
        onMouseLeave={toggle}
        className={`${display}  pe-2 pt-1 pe-md-0 `} style={{position:'absolute'}} >
        <DropdownContent  >
          <li><a className=" py-2"> KODEMIA <br></br> <span className="text-muted">@kodemia</span></a></li>
          <li><a className=" py-2 border-top" href="https://dev.to/dashboard" >Dashboard</a></li>
          <li><a className=" py-2" href="https://dev.to/new">Write a Post</a></li>
          <li><a className=" py-2" href="https://dev.to/readinglist">Reading list</a></li>
          <li><a className=" py-2 border-bottom" href="https://dev.to/settings">Settings</a></li>
          <li><a className=" py-2 " href="hhttps://dev.to/signout_confirm">Sign Out</a></li>
        </DropdownContent>
      </div>
      
      
      
  </React.Fragment>
  );
}