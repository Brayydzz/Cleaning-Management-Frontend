import { DashNavUl, DashLi } from "../Styled"
import { stateContext } from "../stateReducer"
import { useContext } from "react"

const DashboardNav = ({handleClick}) => {
    
  const {currentUser} = useContext(stateContext)

  return (
    <nav>
      <DashNavUl>
        <DashLi onClick={handleClick} id="myJobs">
          My Jobs
        </DashLi>
        <DashLi onClick={handleClick} id="completedJobs">
          Completed Jobs
        </DashLi>
        <DashLi onClick={handleClick} id="editAccount">
          Edit Account Details
        </DashLi>
        {currentUser().isAdmin && 
          <>
            <br />
            <h4>Admin</h4>
            <DashLi onClick={handleClick} id="allJobs">
              All Jobs
            </DashLi>
            <DashLi onClick={handleClick} id="incomingBookings">
              Incoming Bookings
            </DashLi>
            <DashLi onClick={handleClick} id="unassignedJobs">
              Unassigned Jobs
            </DashLi>
            <br />
            <DashLi onClick={handleClick} id="employees">
              Employees
            </DashLi>
            <DashLi onClick={handleClick} id="clients">
              Clients
            </DashLi>
          </>
        }
      </DashNavUl>
    </nav>
  )
}

export default DashboardNav
