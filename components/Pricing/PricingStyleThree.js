import React from "react";
import Link from "next/link";

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6" id="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Packages</h2>
            <p>
              Pick a package based on your requirements and budget
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
                  <h3>Basic Social Media Marketing</h3>
                </div>

                <div className="price">
                  <sup>$</sup>0-499<sub>/ Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Ad Creation [up to 2 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Account Management [up to 2 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Monthly Content Strategy [up to 2 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Analysis and Recommendations [up to 2 social media accounts]
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
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Basic Social Media Marketing</h3>
                </div>

                <div className="price">
                  <sup>$</sup>500-1000<sub>/ Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Ad Creation  [up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Account Management [up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Monthly Content Strategy  [up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Analysis and Recommendations [up to 4 social media accounts]
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
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Basic Social Media Marketing</h3>
                </div>

                <div className="price">
                  <sup>$</sup>1,000-1,499<sub>/ Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Ad Creation [Up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Account Management [Up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Monthly Content Strategy [Up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Analysis and Recommendations [Up to 4 social media accounts]
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    One-On-One Training
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
