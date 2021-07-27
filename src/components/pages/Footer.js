import { Link } from "react-router-dom"
import { Foot } from "./pageStyling"

const Footer = () => {
    return (
        <Foot>
            Sitemap
            <ul style={{ listStyleType: "none" }}>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/services">
                <li>Services</li>
            </Link>
            <Link to="/bookings">
                <li>Contact Us</li>
            </Link>
            </ul>
            <p>{"\u00a9"}, Copyright The Clean Team 2021</p>
      </Foot>
    )
}

export default Footer
