
// import logo from "./logo.svg";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import HomeLogIn from './Home'
import HomeLogIn from './screens/Home';

// import Button from "./Test";
import NewPost from "./screens/createPost";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <HomeLogIn/>
          </Route>  
          <Route exact path="/new">
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //    <Button color='red'/>
    //    <Button color='peru'/>
    //   </header>
    // </div>
  );
}

