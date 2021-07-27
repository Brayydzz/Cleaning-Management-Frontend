import React from "react";
import { AboutContent, AboutImg, AboutContain, HomeArticle } from "./pageStyling";
import { PageButton } from "../../Styled";
import Footer from "./Footer";


const Services = () => {
  return (
    <>
      <div>
        <HomeArticle>
        <h1>Services</h1>
          <AboutContain>
            <AboutImg src={"images/Hour.jpg"} alt="" />
            <AboutContent>
              <h3>Hour Clean</h3>
              <p>
                In a hour The Clean Team cleaners can handle mopping and
                vacuuming, sweeping floors, dusting, and sanitizing kitchens and
                bathrooms so that all living areas are ready to go for our clients
                to use.
              </p>
                <PageButton to="/bookings">Book a Hour Clean Now!</PageButton>
            </AboutContent>
          </AboutContain>
          <AboutContain>
            <AboutContent>
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
                <PageButton to="/bookings">Book a Full Clean Now!</PageButton>
            </AboutContent>
              <AboutImg src={"images/Full.jpg"} alt="" />
          </AboutContain>
          <AboutContain>
            <AboutImg src={"images/Half.jpg"} alt="" />
            <AboutContent>
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
                <PageButton to="/bookings">Book a Half Clean Now!</PageButton>
            </AboutContent>
          </AboutContain>
        </HomeArticle>
      </div>
      <Footer />
    </>
  );
};

export default Services;
