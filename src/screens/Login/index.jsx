
import React, { useEffect, useState } from "react";
import LogInRegistration from "../../components/Login";
import NavBarsinLoggeo from "../../components/NavBarsinLoggeo";
import '../../css/index.css';


export default function LogIn(){

  return(
    <React.Fragment>
      <header>
       <NavBarsinLoggeo/>
      </header>
      <main>
        <LogInRegistration/>
      </main>

    </React.Fragment>
  )
}