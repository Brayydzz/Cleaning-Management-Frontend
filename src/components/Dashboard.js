import React, { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import Login from "./Login";
import DashboardNav from "./DashboardNav";
import AllJobs from "./AllJobs";
import NewEmployee from "./NewEmployee";
import IncomingBookings from "./IncomingBookings";
import Employees from "./Employees";
import { DashContain } from "../Styled";
import MyJobs from "./MyJobs";

const Dashboard = () => {
  const [route, setRoute] = useState("myJobs");
  const { dispatch, token, currentUser } = useContext(stateContext);

  const handleClick = (e) => {
    setRoute(e.target.id)
}

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
        return <Employees handleClick={handleClick}/>;
      }
      case "myJobs":{
        return <MyJobs />
      }
      case "newEmployee": {
        return <NewEmployee />
      }
      default:
        return null;
    }
  };
  return (
    <>
      {token ? (
        <>
          <h1>Hello {currentUser().first_name + " " + currentUser().last_name}</h1>
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
