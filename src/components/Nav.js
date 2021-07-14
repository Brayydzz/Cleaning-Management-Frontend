import { Link } from "react-router-dom"
import { NavUl } from "../Styled"

const Nav = () => {

    return (
        <nav>
            <NavUl>
                <li><Link to="/">Home</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>About</Link></li>
                {/* DELETE THIS BELOW */}
                <li><Link to="/dashboard/admin">Dashboard</Link></li>
                <Link to="/bookings"><button>Book Now!</button></Link>
            </NavUl>
        </nav>
    )
}

export default Nav
