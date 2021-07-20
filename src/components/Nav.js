import { Link } from "react-router-dom"
import { NavUl } from "../Styled"

const Nav = () => {

    return (
        <nav>
            <NavUl>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* DELETE THIS BELOW */}
                <li><Link to="/dashboard">Dashboard</Link></li>
                <Link to="/bookings"><button>Book Now!</button></Link>
            </NavUl>
        </nav>
    )
}

export default Nav
