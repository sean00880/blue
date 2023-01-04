import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">WHAT WE DO</span>
            <h2>All The Services That We Provide to Our Clients</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img1.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Property</a>
                    </Link>
                  </h3>
                  <p>
                  Homeowners, Autos, Renters, Condo/Co-op, and much more. If you own it, the Odds are we can insure it.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img2.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Home & Auto</a>
                    </Link>
                  </h3>
                  <p>
                  We offer package deals for Home & Auto from 12 of the largest carriers in the nation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img3.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Liability</a>
                    </Link>
                  </h3>
                  <p>
                  Insurance that you buy to protect yourself in case something or someone you are responsible for is damaged or injured in some way (Cambridge Dictionary).
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img4.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Life & Health</a>
                    </Link>
                  </h3>
                  <p>
                  When it comes to your health or the well-being of your loved ones, you can never be too sure of what lies ahead.
<br />
 Life insurance keeps life going by safeguarding the financial future of your loved ones. It can be used to pay off debts, cover tuition expenses, or even cover home payments.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img5.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Long Term Care (LTC)</a>
                    </Link>
                  </h3>
                  <p>
                  LTC insurance covers nursing home care, home health care, and personal or adult day care for people over the age of 65 or who have a chronic or disabling condition that necessitates continual monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img6.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Surlplus Lines</a>
                    </Link>
                  </h3>
                  <p>
                  Surplus lines are unique risks that are not typically covered through the main types of insurance. These include but are not limited to; Mobile homes, fine art, classic cars, events, earthquakes, athletes, and ATVS.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
