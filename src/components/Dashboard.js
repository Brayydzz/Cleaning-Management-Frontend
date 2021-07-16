import React, { useContext, useEffect, useState } from "react";
import { stateContext } from "../stateReducer";
import Login from "./Login";
import DashboardNav from "./DashboardNav";
import AllJobs from "./AllJobs";
import IncomingBookings from "./IncomingBookings";
import Employees from "./Employees";
import { DashContain } from "../Styled";
import MyJobs from "./MyJobs";
import AllClients from "./AllClients";
import NewClient from "./NewClient";
import NewEmployee from "./NewEmployee";
import EditClient from "./EditClient";

const Dashboard = () => {
  const [route, setRoute] = useState("myJobs");
  const [contactInfo, setContactInfo] = useState(null) // This is so that we can edit a client / users
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (contactInfo){
      setFormData({
        first_name: contactInfo.contact_information.first_name,
        last_name: contactInfo.contact_information.last_name,
        email: contactInfo.contact_information.email,
        phone_number: contactInfo.contact_information.phone_number,
        street_address: contactInfo.address_object.street_address,
        street_number: contactInfo.address_object.street_number,
        unit_number: contactInfo.address_object.unit_number,
        suburb: contactInfo.address_object.suburb,
        state: contactInfo.address_object.state,
        postcode: contactInfo.address_object.postcode,
      });

    }
  }, [contactInfo])

  const { dispatch, token, currentUser } = useContext(stateContext);

  const handleClick = (e) => {
    setRoute(e.target.id);
  };

  //Switch statement allows us to render a component when a li is clicked in DashboardNav.
  const renderSwitch = () => {
    switch (route) {
      case "allJobs": {
        return <AllJobs />;
      }
      case "incomingBookings": {
        return <IncomingBookings />;
      }
      case "employees": {
        return <Employees handleClick={handleClick} />;
      }
      case "myJobs": {
        return <MyJobs />;
      }
      case "newEmployee": {
        return <NewEmployee setRoute={setRoute} />;
      }
      case "clients": {
        return <AllClients {...{ handleClick, setRoute, setContactInfo }} />;
      }
      case "newClient": {
        return <NewClient {...{ setRoute }} />;
      }
      case "editClient": {
        return <EditClient {...{setRoute, contactInfo, formData, setFormData}}/>
      }

      default:
        return null;
    }
  };

  return (
    <>
      {token ? (
        <>
          <h1>
            Hello {currentUser().first_name + " " + currentUser().last_name}
          </h1>
          <button onClick={() => dispatch({ type: "logout" })}>Log Out</button>
          <DashContain>
            <DashboardNav handleClick={handleClick} />
            {renderSwitch()}
          </DashContain>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Dashboard;
