// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import HomeLogIn from './Home'
import HomeLogIn from "./screens/Home/index";

// import Button from "./Test";
import NewPost from "./screens/createPost";
import LogIn from "./screens/Login/index";
import Home from "./screens/Home";
import Registration from "./screens/Registration";

//import detail's post
import PostDetail from "./screens/postDetail";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <HomeLogIn />
          </Route>
          
          <Route exact path="/users/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/registration">
            <Registration/>
          </Route>

          <Route exact path="/new">
            <NewPost />
          </Route>
          <Route exact path="/detail">
            <PostDetail />
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
