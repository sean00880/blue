import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const BestServices = () => {
  return (
    <>
      <section className="services-area">
        <div className="container-fluid">
          <div className="row m-0" style={{'min-height':'100vh'
          }}>
            <div className="col-lg-5 p-0">
              <div className="services-inner">
                <div className="services-section-title">
                  <h2>Featured at AFJ Productions!</h2>
                  <div className="bar"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <img src="/images/women-with-table.png" alt="Women" />
                </div>
              </div>
            </div>

            <div className="col-lg-7 p-0">
              <div className="services-list">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Navigation]}
                  className="services-slides"
                >
                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service1.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-magnet"></i>
                        </div>

                        <h3>Custom Video Production</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="#video" scroll={true}>
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service2.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-vector"></i>
                        </div>

                        <h3>Event Photography</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="#photo" scroll={true}>
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service3.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-scissors"></i>
                        </div>

                        <h3>Promotional Video</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="panel:Rh4m:2">
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service1.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-scissors"></i>
                        </div>

                        <h3>Portraits</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/service-details">
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Services We Offer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="case-studies-tabs" >
            <Tabs>
              <TabList >
                <Tab>Video Production</Tab>
                <Tab>Photography</Tab>
                <Tab>Other</Tab>
              </TabList>

              <TabPanel  id="video">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-filter"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Corporate/Business Videos</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ia</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Personal Videos</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Sports Videos</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Documentaries</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-plugin"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Crowdfunding</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Id</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>TV Commercial Production</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel id="photo">
                <div className="row">
                <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-filter"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Personal Portraits</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ia</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-filter"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Official Portraits</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ia</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Business Headshots</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-plugin"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Event Photography</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Id</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-plugin"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Family Photography</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Id</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-plugin"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Preschool & K-12 Portraits</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Id</div>
              </div>
                  </div>
                  
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-filter"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Tiktok/Snapchat Reels</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ia</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Livestreaming</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-filter"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Crowdfunding</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ia</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-plugin"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Custom Needs</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Id</div>
              </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-filter"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Information Architect</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ia</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Business Analyst</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Ba</div>
              </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="featured-services-box">
                <div className="icon">
                  <i className="pe-7s-plugin"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Interaction Designer</a>
                  </Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/service-details">
                  <a className="read-more-btn">Read More</a>
                </Link>

                <div className="back-text">Id</div>
              </div>
                  </div>
                </div>
              </TabPanel>

              

              
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
