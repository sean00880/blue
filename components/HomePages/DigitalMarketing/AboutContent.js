import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="marketing-about-area overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-image"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <img
                  src="/images/digital-marketing/about-img.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="marketing-about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>
                Who are we?
                </h2>
                <p>
                Articulate is your locally owned, one-stop shop, independent insurance agency. If it is insurable, odds are we got you! Sahra Yusef is a veteran agent, with expertise in Health and Life insurance. She recruited her partner Saad Mansur shortly after opening the agency. Saad is a bit of a renaissance man. He worked as a Writer, Diplomat, Teacher, Editor, and now an insurance agent. With sahra's experience and expertise, and Saad's Extensive background, Articulate Insurance is your go-to Agency.
                </p>

                <h2>
                Why Us?
                </h2>
                <p>
                1. We articulate complicated coverage in a simple and understandable way. We look for gaps  As a teacher, Saad has been Articulating much harder concepts for a while. 
<br /><br />
2. We pride ourselves on transparency. No funny business, we will show you all your possible carriers and what is best for you, not us.
<br /><br />
3. You got us! If you need to file a claim or ask a question, we do not have an 1800 number with a lengthy automated system that doesn't understand you. Call us directly, We will know exactly who you are, your current situation, and the best course of action. 
                </p>

                <h2>
                Why Independent?
                </h2>
                <p>
                The #1 advantage of having an independent agency is the variety of carriers we offer. As opposed to captive agents, who can only offer you one company, we can shop around and have the freedom to find you the best deal.  
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Global Reach</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Flexible</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>High-End Options</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Dedicated Support</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/about">
                  <a className="default-btn-two">
                    Learn More <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
