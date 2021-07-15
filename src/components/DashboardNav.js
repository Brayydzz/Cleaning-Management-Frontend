import { DashNavUl } from "../Styled"
import { Link } from "react-router-dom"
import { useState } from "react"
import IncomingBookings from "./IncomingBookings"

const DashboardNav = () => {
  

  const handleClick = (e) => {
      console.log('yeet')
  }
  
  return (
    <nav>
      <DashNavUl>
        <li onClick={handleClick}>
          All Jobs
        </li>
        <li>
          Unassigned Jobs
        </li>
        <li>
          Assigned Jobs
        </li>
        <br />
        <li>
          Employees
        </li>
        <li>
          Clients
        </li>
      </DashNavUl>
    </nav>
  )
}

export default DashboardNav
