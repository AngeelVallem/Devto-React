
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLogIn from './screens/Home';

export default function App (){
  return(
    <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              <HomeLogIn/>
            </Route>  
            
          </Switch>
        </div>
      </Router>
  )
}