import React from "react";
import jwtDecode from "jwt-decode";
import Nav from "./components/Nav";
import IncomingBookings from "./components/IncomingBookings";
import Booking from "./components/Booking";
import Home from "./components/Home";
import { useReducer, useEffect } from "react";
import stateReducer, { stateContext } from "./stateReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthFetchRequest, FetchRequest } from "./helperFunctions";

function App() {
  // GLOBAL STATE
  const token = localStorage.getItem("token") || null
  const [store, dispatch] = useReducer(stateReducer, {
    services: [],
    bookings: [],
    token: token,
    user: token ? jwtDecode(token.split(' ')[1])[0] : null
  })
  useEffect(() => {
    FetchRequest("/service_types").then((data) =>
      dispatch({
        type: "setServices",
        services: data,
      })
    );
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <stateContext.Provider value={{ ...store, dispatch }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bookings" component={Booking} />
            <Route exact path="/dashboard/admin" component={IncomingBookings} />
          </Switch>
        </stateContext.Provider>
      </Router>
    </>
  );
}

export default App;
