
import React, { useEffect, useState } from "react";
import RegistrationForm from "../../components/Registration/index";
import NavBarsinLoggeo from "../../components/NavBarsinLoggeo";
import '../../css/index.css';


export default function Registration(){

  return(
    <React.Fragment>
      <header>
       <NavBarsinLoggeo/>
      </header>
      <main>
        <RegistrationForm/>
      </main>

    </React.Fragment>
  )
}