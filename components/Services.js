import React, { useState } from "react";

export default function Services() {
  const [tab, setTab] = useState(0);
  return (
    <section className="service" id="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title"># our services</span>
              <h5
                className="pq-section-title added"
                id="exclusive"
                data-high_text="Exclusive"
                data-title_text="Provide Exclusive Services"
                data-rough_color="#ffffff"
                data-rough_type="underline"
              >
                {" "}
                <span className="last-word"> Exclusive </span>
                Services{" "}
              </h5>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="pq-tabs-1">
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  onClick={() => setTab(0)}
                  className={`pq-tabs nav-item nav-link ${
                    tab === 0 ? "active" : ""
                  } `}
                  id="nav-home-0"
                  data-bs-toggle="tab"
                  href="#nav-0"
                  role="tab"
                  aria-controls="nav-home-0"
                  aria-selected="true"
                >
                  <div className="pq-tabs-icon">
                    <i className=" flaticon-marketing"></i>
                    <span>Web3 Technology</span>
                  </div>
                </a>
                <a
                  onClick={() => setTab(1)}
                  className={`pq-tabs nav-item nav-link ${
                    tab === 1 ? "active" : ""
                  } `}
                  id="nav-home-1"
                  data-bs-toggle="tab"
                  href="#nav-1"
                  role="tab"
                  aria-controls="nav-home-1"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div className="pq-tabs-icon">
                    <i className=" flaticon-call-center"></i>
                    <span>Bulk Crypto Currency</span>
                  </div>
                </a>
                <a
                  onClick={() => setTab(2)}
                  className={`pq-tabs nav-item nav-link ${
                    tab === 2 ? "active" : ""
                  } `}
                  id="nav-home-2"
                  data-bs-toggle="tab"
                  href="#nav-2"
                  role="tab"
                  aria-controls="nav-home-2"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div className="pq-tabs-icon">
                    <i className=" flaticon-data-analytics"></i>
                    <span>QA Testing</span>
                  </div>
                </a>
                <a
                  onClick={() => setTab(3)}
                  className={`pq-tabs nav-item nav-link ${
                    tab === 3 ? "active" : ""
                  } `}
                  id="nav-home-3"
                  data-bs-toggle="tab"
                  href="#nav-3"
                  role="tab"
                  aria-controls="nav-home-3"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div className="pq-tabs-icon">
                    <i className=" flaticon-ux-design"></i>
                    <span>Product design</span>
                  </div>
                </a>
              </div>
              <div className="tab-content text-left" id="nav-tabContent">
                <div
                  className={`tab-pane fade show ${tab === 0 && "active"}`}
                  // id={`nav-${tab}`}
                  role="tabpanel"
                  aria-labelledby="nav-home-0"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <img src="/assets/images/tabs/1.jpg" alt="seo-image" />
                    </div>
                    <div className="col-lg-6">
                      <div className="pq-tab-info">
                        <h2>Build web3 technology.</h2>
                        <p>
                          Our team of engineers and developers are positioned to
                          help you build web3 solutions, ensuring your
                          technology is seamless, safe and secure. Our focus is
                          to help you leverage the best technologies to achieve
                          growth and enhance productivity.
                        </p>
                        <h3>&nbsp;</h3>
                        <ul>
                          <li>100% Responsive</li>
                          <li>Fail Proof Technologies</li>
                          <li>
                            Speed and Accuracy – We build on time, within scope
                            at reasonable costs.
                          </li>
                        </ul>
                        <div>
                          <h3>&nbsp;</h3>
                          <h6>How We work</h6>
                          <h3>&nbsp;</h3>
                          <ul>
                            <li>
                              <strong>NEEDS ASSESSMENT –</strong> We set you up
                              with a dedicated analyst to understand your
                              product or service needs.
                            </li>
                            <li>
                              <strong>FEASIBILITY STUDY –</strong> We conduct a
                              feasibility study via primary and secondary data
                              research to understand the market you operate in.
                            </li>
                            <li>
                              <strong>ROAD MAPPING –</strong> We develop all
                              information gathered into a road map, defining
                              user journey, and product architecture.
                            </li>
                            <li>
                              <strong>DESIGN –</strong> We begin design of your
                              product.
                            </li>
                          </ul>
                        </div>
                        {/* <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <a className="pq-button" href="contact-us.html">
                              <span className="text">Read more</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade show ${tab === 1 && "active"}`}
                  // id="nav-1"
                  role="tabpanel"
                  aria-labelledby="nav-home-1"
                >
                  <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                      <img src="/assets/images/tabs/2.jpg" alt="seo-image" />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="pq-tab-info">
                        <h2>Supply of Bulk crypto currency.</h2>
                        <p>
                          We de-risk the process of aggregating large volumes of
                          crypto / stable / digital currency by providing single
                          transfer of large volumes to payment companies,
                          assisting their capacity to deliver settlements to
                          their customers and on time.
                        </p>
                        <h3>&nbsp;</h3>
                        <h6>we support major assets including:</h6>
                        <h3>&nbsp;</h3>
                        <ul>
                          <li>Bitcoin,</li>
                          <li>Ethereum,</li>
                          <li>USDC,</li>
                          <li>USDT</li>
                        </ul>
                        {/* <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <a className="pq-button" href="contact-us.html">
                              <span className="text">Read more</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade show ${tab === 2 && "active"}`}
                  // id="nav-2"
                  role="tabpanel"
                  aria-labelledby="nav-home-2"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <img src="/assets/images/tabs/3.jpg" alt="seo-image" />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="pq-tab-info">
                        <h2>Cloud Hosting</h2>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum.
                        </p>
                        <h3>&nbsp;</h3>
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </li>
                          <li>
                            Donec lobortis dui id diam facilisis, vitae
                            pellentesque sem convallis.
                          </li>
                          <li>
                            Vivamus volutpat dui nec mauris ultrices lacinia.
                          </li>
                          <li>
                            Praesent ac velit aliquam, lacinia mi nec, feugiat
                            ligula.
                          </li>
                        </ul>
                        <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <a className="pq-button" href="contact-us.html">
                              <span className="text">Read more</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade show ${tab === 3 && "active"}`}
                  // id="nav-3"
                  role="tabpanel"
                  aria-labelledby="nav-home-3"
                >
                  <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                      <img src="/assets/images/tabs/4.jpg" alt="seo-image" />
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="pq-tab-info">
                        <h2>Share Hosting</h2>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters
                        </p>
                        <h3>&nbsp;</h3>
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </li>
                          <li>
                            Donec lobortis dui id diam facilisis, vitae
                            pellentesque sem convallis.
                          </li>
                          <li>
                            Vivamus volutpat dui nec mauris ultrices lacinia.
                          </li>
                          <li>
                            Praesent ac velit aliquam, lacinia mi nec, feugiat
                            ligula.
                          </li>
                        </ul>
                        <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <a className="pq-button" href="contact-us.html">
                              <span className="text">Read more</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
