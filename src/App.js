import React from 'react';
import Nav from './components/Nav';
import IncomingBookings from './components/IncomingBookings'
import Booking from './components/Booking';
import Home from './components/Home';
import { useReducer, useEffect } from 'react';
import stateReducer, { stateContext } from './stateReducer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { AuthFetchRequest, FetchRequest } from './helperFunctions';


function App() {

  // GLOBAL STATE
  const [store, dispatch] = useReducer(stateReducer, {
    services: [],
  })

  useEffect(() => {
    const services = FetchRequest("/service_types")
    .then(data => dispatch({
      type: "setServices",
      services: data
    }))
    // console.log(services)
  }, [])

  return (
    <>
    <Router>
      <Nav />
      <stateContext.Provider value={{...store, dispatch}}>
        <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/bookings" component={Booking} />
            <Route exact path="/admin" component={IncomingBookings} />
        </Switch>
      </stateContext.Provider>
    </Router>
    </>
  );
}

export default App;
