import React from "react";
import jwtDecode from "jwt-decode";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import Home from "./components/Home";
import { useReducer, useEffect } from "react";
import stateReducer, { stateContext } from "./stateReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FetchRequest, AuthFetchRequest } from "./helperFunctions";
import FlashMessage from "./components/FlashMessage";
import GlobalModal from "./components/Modals/GlobalModal";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  // GLOBAL STATE
  const token = localStorage.getItem("token");
  const [store, dispatch] = useReducer(stateReducer, {
    services: [],
    employees: [],
    jobs: [],
    token: token,
    currentUser: () => (token ? jwtDecode(token.split(" ")[1]) : null),
    error: "",
    message: "",
    clients: [],
    modalOpen: false,
    modalType: "",
    modalData: {}
  });
  
  // Get request for Jobs
  useEffect(() => {
    AuthFetchRequest("/jobs", token).then(data => {
      dispatch({
        type: "setJobs",
        jobs: data,
      })
    })
  }, [])

  // Get request for Clients
  useEffect(() => {
    AuthFetchRequest("/clients", token).then((data) => {
      dispatch({ type: "setClients", clients: data })
    })
  }, [])

  // Get request for Employees
  useEffect(() => {
    AuthFetchRequest("/users", token).then((data) => {
      // setUsers(data)
      dispatch({
        type: "setEmployees",
        employees: data,
      })
    })
  }, [])


  // Get request for services
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
          <GlobalModal />
          <FlashMessage />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/bookings" component={Booking} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </stateContext.Provider>
      </Router>
    </>
  );
}

export default App;
