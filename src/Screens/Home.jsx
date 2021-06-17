import React, { useEffect, useState } from "react";

import Card from "../components/Home/Card/Index";
import LeftAside from "../components/Home/leftAside/Index";
import RightAside from "../components/Home/rightAside/Index";
import Loader from "../components/Loader"
import NavBarsinLoggeo from "../components/NavBarsinLoggeo";
import NavBarLoggeado from "../components/NavBarLoggeado";

import {getPost} from "../services"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Home() {

  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
      async function getData() {
          const {data} = await  getPost()
          setPosts(data.posts)
      }
      getData()
  },[])


  if(!posts) {
    return <Loader/>
  }




  return (
    <>
    <NavBarLoggeado/>
    <div className="container">
      <div className="row">
        <div className="col-3 d-none d-md-block col-3">
          <LeftAside />
        </div>
        <div className="col-12 col-md-9 col-lg-6">
          <header className="d-flex justify-content-between m-3">
            <h3>Posts</h3>
            <select name="select" className="d-block d-lg-none">
              <option value="Feed">Feed</option>
              <option value="Week">Week</option>
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
         {posts.map((post,i) =>  <Card key={i} post={post} index={i}/>)}
        </div>
        <div className="col d-none  d-lg-block col-lg-3">
          <RightAside />
          <RightAside />
          <RightAside />
        </div>
      </div>
    </div>
  </>
  );
}
