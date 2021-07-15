import React, { useContext, useState } from "react"
import { stateContext } from "../stateReducer"
import Login from "./Login"
import DashboardNav from "./DashboardNav"
import AllJobs from "./AllJobs"

const Dashboard = () => {
  const [route, setRoute] = useState("allJobs")

  const renderSwitch = () => {
    switch (route) {
      case "allJobs": {
        return <AllJobs />
      }
      case "unAssignedJobs": {
        // return <UnAssignedJobs />
      }
    }
  }

  const { token, user } = useContext(stateContext)
  return (
    <>
      {token ? (
        <h1>Hello {console.log(user())}</h1>
      ) : (
        <Login />
      )}
      <DashboardNav setRoute={setRoute} />
    </>
  )
}

export default Dashboard
