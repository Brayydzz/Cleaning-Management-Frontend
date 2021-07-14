import { Link } from "react-router-dom"

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>About</Link></li>
            </ul>
            <Link><button>Book Now!</button></Link>
        </nav>
    )
}

export default Nav
