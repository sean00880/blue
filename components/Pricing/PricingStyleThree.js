import React from "react";
import Link from "next/link";

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Pick Your Budget</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Private Session</h3>
                </div>

                <div className="price">
                  <sup>$</sup>0-99<sub>/ Session</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Personal Videos
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Tiktok/SnapChat Video Ads
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Youtube Reel Videos
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Personal Portraits
                  </li>
                
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Request Quote</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="pricing-header">
                  <h3>Enterprise Session</h3>
                </div>

                <div className="price">
                  <sup>$</sup>100-299 <sub>/ Session</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Sports Videos
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Livestreaming
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Professional Portraits
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Professional Headshots
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Request Quote</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="pricing-header">
                  <h3>Industrial Session</h3>
                </div>

                <div className="price">
                  <sup>$</sup>299+<sub> / Session</sub>
                </div>

                <ul className="pricing-features">
                <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Corporate/Business Videos
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Event Videography
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    TV Commercial Production
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Documentaries
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Crowdfunding
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Request Quote</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleThree;
