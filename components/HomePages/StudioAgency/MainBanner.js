import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="hero-banner video-studio overly-6">
        <div className="video-background">
          <video autoPlay loop src="/video/promo-video.mp4" />
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center flex-column">
                <div className="col-lg-8">
                  <div className="main-banner-content text-center">
                    <h1><strong>BLU</strong><hr />Your Partner for Innovative Marketing Solutions</h1>

                    <p>
                    At Blu, we believe that social media is one of the most powerful tools for businesses to connect with their audience and grow their brand. Our team of experts is dedicated to helping you leverage the power of social media to achieve your business goals.
                    </p>

                    <Link href="/contact">
                      <a className="btn btn-primary">Contact Us</a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="video-box">
                    <Link href="#play-video">
                      <a
                        onClick={() => setToggler(!toggler)}
                        className="video-btn"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
