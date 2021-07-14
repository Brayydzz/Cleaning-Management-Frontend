import { Link } from "react-router-dom"

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>About</Link></li>
                {/* DELETE THIS BELOW */}
                <li><Link to="/dashboard/admin">Dashboard</Link></li>
                
            </ul>
            <Link to="/bookings"><button>Book Now!</button></Link>
        </nav>
    )
}

export default Nav
