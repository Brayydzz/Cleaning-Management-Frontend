import React, { useContext, useState } from "react"
import { stateContext } from "../stateReducer"
import Login from "./Login"
import DashboardNav from "./DashboardNav"
import AllJobs from "./AllJobs"
import IncomingBookings from "./IncomingBookings"
import Employees from "./Employees"
import { DashContain, DashCardContain } from "../Styled"

const Dashboard = () => {
  const [route, setRoute] = useState("allJobs")
  const {dispatch} = useContext(stateContext)

  //Switch statement allows us to render a component when a li is clicked in DashboardNav.
  const renderSwitch = () => {
    switch (route) {
      case "allJobs": {
        return <AllJobs />
      }
      case "incomingBookings": {
        return <IncomingBookings />
      }
      case "employees": {
        return <Employees/>
      }
      default: return null
    }
  }


  const { token, user } = useContext(stateContext)
  return (
    <>
      {token ? (
          <>
            <h1>Hello {user().first_name + " " + user().last_name}</h1>
            <button onClick={() => dispatch({type: "setTokenAndUser", token: null})}>Log Out</button>
            <DashContain>
              <DashboardNav setRoute={setRoute} />
                {renderSwitch()}
            </DashContain>
          </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Dashboard
