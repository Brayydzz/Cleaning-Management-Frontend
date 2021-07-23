import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <h1>Services</h1>
        <article>
          <div>
            <img src="https://placeimg.com/200/200/people" alt="" />
            <h3>Hour Clean</h3>
            <p>
              In a hour The Clean Team cleaners can handle mopping and
              vacuuming, sweeping floors, dusting, and sanitizing kitchens and
              bathrooms so that all living areas are ready to go for our clients
              to use.
            </p>
            <Link to="/bookings">
              <button>Book a Hour Clean Now!</button>
            </Link>
          </div>
          <div>
            <img src="https://placeimg.com/200/200/people" alt="" />
            <h3>Full Day Clean</h3>
            <p>
              Strike off those jobs you just never get to with this deep,
              rejuvenating cleanse. Even when you are on top of weekly surface
              cleaning, those hard-to-reach areas get away from you – especially
              here in Brisbane, with our breezy, dust-collecting homes and
              humidity. To make your home cleaner than it’s ever been, we match
              you with cleaners who thrive on seeking out the faintest cobweb,
              cleaning underneath the couch and targeting build-up. We also
              recommend a detailed spring clean before commencing a regular
              cleaning service, as it makes your home easier and cheaper to
              maintain.
            </p>
            <Link to="/bookings">
              <button>Book a Full Clean Now!</button>
            </Link>
          </div>
          <div>
            <img src="https://placeimg.com/200/200/people" alt="" />
            <h3>Half Day Clean</h3>
            <p>
              At The Clean Team we identify with your cleaning needs, when you
              think of leaving your rental property or just think of preparing
              it for sale. We also understand how important it is to clean and
              check every corner of the house before leaving it. If you've just
              had a party and you do not want your landlord to seize all the
              money just because you had no time to clean the property. Have our
              cleaning experts come and return your place back to its former
              glory.
            </p>
            <Link to="/bookings">
              <button>Book a Half Clean Now!</button>
            </Link>
          </div>
        </article>
      </div>
      <footer>
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
      </footer>
    </>
  );
};

export default Services;
