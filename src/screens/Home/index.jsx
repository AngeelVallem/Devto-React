import React from "react";
import NavBarsinLoggeo from "../../components/NavBarsinLoggeo";
import "../../css/index.css";

import Footer from "../../components/footer/footer"; //footer

export default function HomeLogIn() {
  return (
    <React.Fragment>
      <header>
        <NavBarsinLoggeo />
      </header>
      <Footer />
    </React.Fragment>
  );
}
