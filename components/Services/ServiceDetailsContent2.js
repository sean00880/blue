import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Facebook Marketing Services</h2>
                <p>
                As a marketing agency, our Facebook marketing services are designed to help businesses increase their online visibility, engagement, and ultimately, their bottom line. We specialize in creating customized Facebook marketing strategies that align with our clients' unique needs and goals.
                </p>
                
                <p>At Orange, we are committed to delivering exceptional Facebook marketing services that drive real business results. Our team of experts has years of experience in social media marketing and is dedicated to helping businesses succeed online.</p>
                <h3>Our Services:</h3>
                <h4>Facebook page setup and optimization:</h4>
                <p>We help businesses create and optimize their Facebook pages to ensure they are fully optimized for search and user engagement. This includes creating custom cover images, profile pictures, and optimizing page information.</p>
                <h4>Content creation and curation:</h4>
                <p>We create and curate high-quality, engaging content that is specifically tailored to each client's target audience. This includes Facebook posts, images, videos, and other multimedia content.</p>
                <h4>Facebook ads management:</h4>
                <p>We create and manage Facebook ad campaigns to help businesses reach a wider audience and generate leads and sales. We optimize ad targeting, budget, and creative to achieve the best possible results.</p>
                <h4>Community management:</h4>
                <p>We help businesses manage their Facebook communities by responding to comments and messages, engaging with followers, and fostering a positive brand image.</p>
                <h4>Analytics and reporting:</h4>
                <p>We provide regular analytics and reporting to help clients track the performance of their Facebook campaigns. This includes data on engagement, reach, clicks, conversions, and other key metrics.</p>
                <div className="others-options">
                <Link href="/contact">
                  <a className="btn btn-primary">Request Your Free Quote</a>
                </Link>
              </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                
                <ul>
                <h2>Our Working Process:</h2>

<li>Discovery and Strategy Development: In this stage, we work with our clients to understand their business objectives, target audience, and overall marketing goals. We also conduct competitive analysis and identify the best strategies to achieve the desired outcomes.</li>
<li>Account Setup and Optimization: We create or optimize our clients' Facebook pages to ensure they are fully optimized for search and user engagement. This includes creating custom cover images, profile pictures, and optimizing page information.</li>
<li>Content Creation and Curation: We create or curate high-quality, engaging content that is specifically tailored to each client's target audience. This includes Facebook posts, images, videos, and other multimedia content. We use a mix of organic and paid promotion to maximize reach and engagement.</li>
<li>Facebook Advertising: We create and manage Facebook ad campaigns to help businesses reach a wider audience and generate leads and sales. We optimize ad targeting, budget, and creative to achieve the best possible results. We use a variety of ad formats, including carousel ads, video ads, and sponsored posts.</li>
<li>Community Management: We help businesses manage their Facebook communities by responding to comments and messages, engaging with followers, and fostering a positive brand image. We also monitor social media mentions and respond to customer feedback to ensure a positive reputation online.</li>
<li>Analytics and Reporting: We provide regular analytics and reporting to help clients track the performance of their Facebook campaigns. This includes data on engagement, reach, clicks, conversions, and other key metrics. We use this data to optimize campaigns and adjust strategies as needed.</li>

  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
