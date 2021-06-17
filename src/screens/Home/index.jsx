import React from "react";
import NavBarsinLoggeo from "../../components/NavBarsinLoggeo";

import Card from '../../components/Home/Card/Index';
import LeftAside from "../../components/Home/leftAside/Index";
import RightAside from "../../components/Home/rightAside/Index";
import '../../css/index.css'



import Footer from "../../components/footer/footer"; //footer

export default function HomeLogIn() {
  return (
    <React.Fragment>
      <header>
        <NavBarsinLoggeo />
      </header>
      <main className="mt-5">
      <div className="container">
      <div className="row">
        <div className="col-3 d-none d-md-block col-3">
          <LeftAside />
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <header className="d-flex justify-content-between m-3">
            <h3>Posts</h3>
            <select name="select" className='d-block d-lg-none'>
              <option value="Feed">Feed</option>
              <option value="Week">
                Week
              </option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
              <option value="Infinity">Infinity</option>
              <option value="Lastest">Lastest</option>
            </select>
            <ul className="d-none  d-lg-flex">
              <li className="mx-1">Feed</li>
              <li className="mx-1">Week</li>
              <li className="mx-1">Month</li>
              <li className="mx-1">Year</li>
              <li className="mx-1">Infinity</li>
              <li className="mx-1">Latest</li>
            </ul>
          </header>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="col d-none  d-lg-block col-lg-3">
          <RightAside />
          <RightAside />
          <RightAside />
        </div>
      </div>
    </div>
      </main>
    </React.Fragment>
  );
}
