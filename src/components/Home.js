import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <h1>The Clean Team</h1>
        <blockquote>We'll sweep you off your feet!</blockquote>
        <Link to="/bookings">
          <button>Get a Quote!</button>
        </Link>
      </header>
      <div>
        <article>
          <div class="homeSection" id="homeAbout">
            <h2>About The Clean Team</h2>
            <p>
              We are a Brisbane based family owned business established in 1998.
              With over a decade worth of experience in the cleaning industry,
              our quality and standards leave our clients spotless.
            </p>
          </div>
          <div class="homeSection" id="homeServices">
            <h2>Available Services</h2>
            <span>
              <img src="https://placeimg.com/200/200/people" alt="" />
              <h3>Hour Clean</h3>
              <p>
                The hour clean service is for people with a busy lifestyle, that
                require a quick touch-up around the home. We offer a
                re-occurring service so that you can have a ongoing regular
                clean anywhere from every couple of days to once a month.
              </p>
              <Link to="/bookings">
                <button>Book Now!</button>
              </Link>
            </span>
            <br />
            <span>
              <img src="https://placeimg.com/200/200/people" alt="" />

              <h3>Full Day Clean</h3>
              <p>
                The full day clean is hour premium service. We offer a complete
                extensive clean, no job is too tough. Over a period of 8 hours
                we will utilize ours years of experience to convert any
                residence to a show home.
              </p>
              <Link to="/bookings">
                <button>Book Now!</button>
              </Link>
            </span>
            <br />
            <span>
              <img src="https://placeimg.com/200/200/people" alt="" />

              <h3>Half Day Clean</h3>
              <p>
                The half day clean is the best of both worlds. Had a party and
                not in the mood to clean up? Moving house and need a bond clean?
                Want a little extra love and attention around the bathrooms to
                bring them back to new? The half clean is just the solution for
                you!
              </p>
              <Link to="/bookings">
                <button>Book Now!</button>
              </Link>
            </span>
            <br />
          </div>
          <div class="homeSection" id="homeTestimonies">
            <h2>Testimonies</h2>
            <p>
              Nicole P.
              <br />
              Whenever we have had issues I have found The Clean Team staff to
              be both friendly and responsive. They always do their best to
              ensure that concerns are addressed and have really gone above and
              beyond on several occasions. I feel that they understand what our
              needs and challenges are and consistently work towards achieving
              expectations. I would recommend their service without hesitation.
            </p>
            <p>
              Amanda D.
              <br />
              We switched from our old cleaning company to The Clean Team and
              are very happy with them. They are efficient, reliable and
              definitely know how to please us. If there is an issue, one phone
              call or email is all it takes to get it looked after. The best
              part is the monthly inspection that that takes place even after
              efficient cleaning, which goes to show that they really care and
              will go the extra mile to make sure the customer is satisfied.
            </p>
            <p>
              Jim D.
              <br />
              The Clean Team has earned my support. After 14 years of dedicated
              reliable services who could ask for anything more. First class
              year in and year out and never a worry.
            </p>
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

export default Home;
