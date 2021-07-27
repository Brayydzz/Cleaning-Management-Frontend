import React from 'react'
import { useState, useContext } from 'react'
import * as FaIcons from "react-icons/fa" 
import * as AiIcons from "react-icons/ai" 
import { DashButton } from '../../Styled'
import { stateContext } from "../../stateReducer"
import './SideDash.css';


function DashNav({handleClick}) {
    
    const [sidebar, setSidebar] = useState(false)
    const {currentUser} = useContext(stateContext)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div style={{width: sidebar ? '200px' : '100px'}}>
            <div style={{display: sidebar ? "none" : "block"}} className="navbar">
                <DashButton className="menu-bars" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </DashButton>
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle close-icon">
                        <DashButton className="menu-bars" onClick={showSidebar}>
                            <AiIcons.AiOutlineClose />
                        </DashButton>
                    </li>
                    <li className={'nav-text'}>
                        <DashButton onClick={handleClick} id="myJobs">
                            My Jobs
                        </DashButton>
                    </li>
                    <li className={'nav-text'}>
                        <DashButton onClick={handleClick} id="completedJobs">
                            Completed Jobs
                        </DashButton>
                    </li>
                    <li className={'nav-text'}>
                        <DashButton onClick={handleClick} id="accountDetails">
                            Account Details
                        </DashButton>
                    </li>
                    {
                        currentUser().isAdmin &&
                        <>
                            <li className={'nav-text'}>
                                <DashButton onClick={handleClick} id="allJobs">
                                    All Jobs
                                </DashButton>
                            </li>
                            <li className={'nav-text'}>
                                <DashButton onClick={handleClick} id="incomingBookings">
                                    Incoming Bookings
                                </DashButton>
                            </li>
                            <li className={'nav-text'}>
                                <DashButton onClick={handleClick} id="employees">
                                    Employees
                                </DashButton>
                            </li>
                            <li className={'nav-text'}>
                                <DashButton onClick={handleClick} id="clients">
                                    Clients
                                </DashButton>
                            </li>
                        </>
                    }
                </ul>

            </nav>
        </div>
    )
}

export default DashNav
