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
                <h2>Twitter Marketing Services</h2>
                <p>
                With years of experience in digital marketing, our team is dedicated to creating customized Twitter marketing campaigns that align with your business goals and objectives.
                </p>
                
                <p>
                We understand that Twitter can be a powerful tool for businesses to connect with their audience, increase brand awareness, and drive conversions. Our team of experienced social media experts will work closely with you to create a tailored Twitter marketing strategy that aligns with your business objectives.
                </p>
                <p>At Orange Marketing Agency, we are dedicated to helping businesses achieve their marketing goals on Twitter. Contact us today to learn more about our Twitter marketing services and how we can help your business grow on social media.</p>
                <h3>Our Services:</h3>
                <h4>Strategy development:</h4>
                <p>We start by understanding your business, target audience, and competition to create a comprehensive Twitter marketing strategy. This includes setting clear goals, determining the right messaging and tone, and identifying the best tactics for engaging with your audience.</p>
                <h4>Content creation:</h4>
                <p> Our team of content experts will create compelling and relevant content for your Twitter profile that resonates with your target audience. This includes a mix of text, images, videos, and other multimedia content that helps you stand out in a crowded social media landscape.</p>
                <h4>Community Management:</h4>
                <p>We monitor your Twitter account regularly, respond to comments and messages.</p>
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

<li>Twitter account setup and optimization: We help businesses create and optimize their Twitter profiles to ensure they are fully optimized for search and user engagement.</li>

<li>Content creation and curation: We create and curate high-quality, engaging content that is specifically tailored to each client's target audience. This includes tweets, images, videos, and other multimedia content.</li>

<li>Hashtag research and usage: We conduct extensive research to identify the most relevant and effective hashtags for each client's brand and industry. We then use these hashtags strategically to increase visibility and engagement.</li>

<li>Twitter ads management: We create and manage Twitter ad campaigns to help businesses reach a wider audience and generate leads and sales. We optimize ad targeting, budget, and creative to achieve the best possible results.</li>

<li>Analytics and reporting: We provide regular analytics and reporting to help clients track the performance of their Twitter campaigns. This includes data on engagement, reach, clicks, conversions, and other key metrics.</li>
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
