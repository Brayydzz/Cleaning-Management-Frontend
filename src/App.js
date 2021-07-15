import React from "react";
import jwtDecode from "jwt-decode";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import Home from "./components/Home";
import { useReducer, useEffect } from "react";
import stateReducer, { stateContext } from "./stateReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FetchRequest } from "./helperFunctions";
import FlashMessage from "./components/FlashMessage";

function App() {
  // GLOBAL STATE
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(!!token);
  const [store, dispatch] = useReducer(stateReducer, {
    services: [],
    token: token,
    user: () => (token ? jwtDecode(token.split(" ")[1]) : null),
    error: "",
    message: "",
  });
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
        <FlashMessage />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bookings" component={Booking} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </stateContext.Provider>
      </Router>
    </>
  );
}

export default App;
