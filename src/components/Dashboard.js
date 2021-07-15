import React, { useContext, useState } from "react"
import { stateContext } from "../stateReducer"
import Login from "./Login"
import DashboardNav from "./DashboardNav"
import AllJobs from "./AllJobs"
import IncomingBookings from "./IncomingBookings"
import { DashContain, DashCardContain } from "../Styled"

const Dashboard = () => {
  const [route, setRoute] = useState("allJobs")


  //Switch statement allows us to render a component when a li is clicked in DashboardNav.
  const renderSwitch = () => {
    switch (route) {
      case "allJobs": {
        return <AllJobs />
      }
      case "incomingBookings": {
        return <IncomingBookings />
      }
    }
  }

  const { token, user } = useContext(stateContext)
  return (
    <>
      {token ? (
          <>
            <h1>Hello {user().first_name + " " + user().last_name}</h1>
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
