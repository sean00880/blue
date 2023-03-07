import React from "react";
import NavbarTwo from "../components/Layouts/NavbarThree";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent2 from "../components/Services/ServiceDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const ServiceDetails = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Facebook Marketing" BGImage="/images/page-banner1.jpg" />

      <ServiceDetailsContent2 />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServiceDetails;
