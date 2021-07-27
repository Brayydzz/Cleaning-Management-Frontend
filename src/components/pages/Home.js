import { AboutCardContain, HeroText, HomeArticle, PageP, ServiceCard, ServiceContainer, Footer, FooterLink, ServiceImg } from "./pageStyling";
import { PageButton, DashCard } from "../../Styled";


const Home = () => {
  return (
    <>
          <div className="hero-image">
            <HeroText>
              <h1>The Clean Team</h1>
              <PageP>We'll sweet you off your feet!</PageP>
              <PageButton to="/bookings">Get a Quote</PageButton >
            </HeroText>
          </div>
      <div>
        <HomeArticle>
          <AboutCardContain class="homeSection" id="homeAbout">
            <h1>About The Clean Team</h1>
            <PageP>
              We are a Brisbane based family owned business established in 1998.
              With over a decade worth of experience in the cleaning industry,
              our quality and standards leave our clients spotless.
            </PageP>
          </AboutCardContain>
            <h2>Available Services</h2>
          <ServiceContainer >
            <ServiceCard>
              <ServiceImg src={'images/Hour.jpg'} alt="" />
              <h3>Hour Clean</h3>
              <PageP>
                The hour clean service is for people with a busy lifestyle, that
                require a quick touch-up around the home. We offer a
                re-occurring service so that you can have a ongoing regular
                clean anywhere from every couple of days to once a month.
              </PageP>
                <PageButton to="/bookings">Book Now!</PageButton >
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImg src={"images/Half.jpg"} alt="" />

              <h3>Full Day Clean</h3>
              <PageP>
                The full day clean is hour premium service. We offer a complete
                extensive clean, no job is too tough. Over a period of 8 hours
                we will utilize ours years of experience to convert any
                residence to a show home.
              </PageP>
                <PageButton to="/bookings">Book Now!</PageButton >
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImg src={"images/Full.jpg"} alt="" />

              <h3>Half Day Clean</h3>
              <PageP>
                The half day clean is the best of both worlds. Had a party and
                not in the mood to clean up? Moving house and need a bond clean?
                Want a little extra love and attention around the bathrooms to
                bring them back to new? The half clean is just the solution for
                you!
              </PageP>
                <PageButton to="/bookings">Book Now!</PageButton >
            </ServiceCard>
          </ServiceContainer>
            <h2>Testimonies</h2>
          <ServiceContainer>
            <DashCard>
                <h2>Nicole P.</h2>
              <PageP>
                Whenever we have had issues I have found The Clean Team staff to
                be both friendly and responsive. They always do their best to
                ensure that concerns are addressed and have really gone above and
                beyond on several occasions. I feel that they understand what our
                needs and challenges are and consistently work towards achieving
                expectations. I would recommend their service without hesitation.
              </PageP>
            </DashCard>
            <DashCard>
                <h2>Amanda D.</h2>
              <PageP>
                We switched from our old cleaning company to The Clean Team and
                are very happy with them. They are efficient, reliable and
                definitely know how to please us. If there is an issue, one phone
                call or email is all it takes to get it looked after. The best
                part is the monthly inspection that that takes place even after
                efficient cleaning, which goes to show that they really care and
                will go the extra mile to make sure the customer is satisfied.
              </PageP>
            </DashCard>
            <DashCard>
                <h2>Jim D.</h2>
              <PageP>
                The Clean Team has earned my support. After 14 years of dedicated
                reliable services who could ask for anything more. First class
                year in and year out and never a worry.
              </PageP>
            </DashCard>
          </ServiceContainer>
        </HomeArticle>
      </div>
      <Footer>
        Sitemap
        <ul style={{ listStyleType: "none" }}>
          <FooterLink to="/about">
            <li>About</li>
          </FooterLink>
          <FooterLink to="/services">
            <li>Services</li>
          </FooterLink>
          <FooterLink to="/bookings">
            <li>Contact Us</li>
          </FooterLink>
        </ul>
        <p>{"\u00a9"}, Copyright The Clean Team 2021</p>
      </Footer>
    </>
  );
};

export default Home;
