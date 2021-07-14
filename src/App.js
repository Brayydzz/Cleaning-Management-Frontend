import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Switch>
        <Home />
      </Switch>
    </Router>
    </>
  );
}

export default App;
