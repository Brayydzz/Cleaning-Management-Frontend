import React from 'react';
import Nav from './components/Nav';
import Booking from './components/Booking';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
