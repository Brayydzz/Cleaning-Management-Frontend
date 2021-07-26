import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
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
  }, [token])

  // Get request for Clients
  useEffect(() => {
    AuthFetchRequest("/clients", token).then((data) => {
      dispatch({ type: "setClients", clients: data })
    })
  }, [token])

  // Get request for Employees
  useEffect(() => {
    AuthFetchRequest("/users", token).then((data) => {
      // setUsers(data)
      dispatch({
        type: "setEmployees",
        employees: data,
      })
    })
  }, [token])


  // Get request for services
  useEffect(() => {
    FetchRequest("/service_types").then((data) =>
      dispatch({
        type: "setServices",
        services: data,
      })
    );
  }, []);

  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <stateContext.Provider value={{ ...store, dispatch }}>
          <GlobalModal />
          {
            !store.modalOpen &&
              <>
                <Navbar toggleNav={toggleNav}/>
                <Sidebar isOpen={isOpen} toggleNav={toggleNav}/>
                <FlashMessage />
              </>
          }
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
