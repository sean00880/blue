import React from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import MainBanner from "../components/HomePages/StudioAgency/MainBanner";
import FeaturedServices from "../components/HomePages/StartupAgencyTwo/FeaturedServices";

import FeedbackTwo from "../components/Common/FeedbackTwo";
import BestServices from "../components/HomePages/StartupAgencyTwo/BestServices";
import Partner from "../components/Common/Partner";
import Feedback from "../components/Common/Feedback";
import Portfolio from "../components/HomePages/StartupAgencyTwo/Portfolio";
import TeamStyleFour from "../components/Common/TeamStyleFour";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import WorkProcess from "../components/HomePages/StartupAgencyTwo/WorkProcess";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import LatestNews from "../components/Common/LatestNews";
import Newsletter from "../components/Common/Newsletter";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Faq from "../components/HomePages/SoftwareStartup/Faq";
import Contact from "../components/Contact/ContactForm";


const StartupAgency2 = () => {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <BestServices />

   

      <PricingStyleThree />

      <Feedback />

      <Faq/>
      <Contact/>
      <Footer />
    </>
  );
};

export default StartupAgency2;
