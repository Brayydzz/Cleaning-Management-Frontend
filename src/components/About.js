import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header>
        <h1>About The Clean Team</h1>
        <blockquote>Don't stress, let us handle the mess.</blockquote>
        <Link to="/bookings">
          <button>Get a Quote!</button>
        </Link>
      </header>
      <div>
        <div>
          <h1>History Of The Clean Team</h1>
          <p>
            The Clean Team was founded in 1998 by John Smith, making it one of
            the oldest and most experienced residential cleaning companies in
            the Brisbane CBD. After many years of experience in property
            management, John saw a need for a specialized quality local service
            provider to cater for the specific needs of Brisbane’s booming
            residential market.
          </p>
        </div>
        <article>
          <div>
            <h2>Our Values</h2>
            <span>
              <img src="https://placeimg.com/200/200/people" alt="" />
              <div>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    Respect: The Clean Team is an inclusive organization where
                    people of all creeds are welcomed and respected on their
                    merits.
                  </li>
                  <li>
                    Responsibility: We strive to act with integrity towards our
                    staff, our customers, the community and the environment.
                  </li>
                  <li>
                    Caring: a duty of care for our staff, customers and the
                    environment.
                  </li>
                  <li>
                    Excellence: At The Clean Team, we seek to provide the best
                    quality experience with regards to our cleaning and our
                    customer service.
                  </li>
                  <li>
                    Integrity: We hold ourselves to the highest standards of
                    accountability. At The Clean Team , we strive to act with
                    honesty, openness and to be the embodiment of the words we
                    speak.
                  </li>
                  <li>
                    Innovation: We use an externally audited Integrated
                    Management System (IMS) across the organization to
                    effectively manage staff, collaborate on tasks and
                    communicate with our customers, resulting in a highly
                    efficient service.
                  </li>
                </ul>
                Our management team enter their data directly into the
                electronic audit form which is automatically uploaded into our
                online system which are then accessible by client appointed
                representatives as required.
              </div>
            </span>
            <br />
            <span>
              <img src="https://placeimg.com/200/200/people" alt="" />

              <h3>The Team</h3>
              <p>
                The Clean Team prides itself on the calibre of our cleaners. Not
                only do all of our cleaners undergo the standard criminal
                history and background checks you would expect, but we are very
                particular about only engaging individuals with strong cleaning
                experience which is both independently verifiable via referees.
                Even after applying our strict recruitment standards, we still
                have all candidates undertake our own in-house training to
                ensure they are employing best practices and conforming to The
                Clean Team standards in all of the work they undertake. Unlike
                many cleaning companies, we keep tabs on our top performing
                cleaners so that we can reward them through our industry leading
                cleaner incentive scheme which includes the reward of a $50
                playstation plus voucher!
              </p>
            </span>
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

export default About;
