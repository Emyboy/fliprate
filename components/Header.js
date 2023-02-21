import React from "react";

export default function Header() {
  return (
    <header id="pq-header" className="pq-header-default">
      <div className="pq-top-header">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-6 text-right">
              <div className="pq-header-social text-right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pq-header-contact">
                <ul>
                  <li>
                    <a href="tel:+180045647824">
                      <i className="fas fa-phone-flip"></i>
                      <span>+1-800-456-478-24</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:peacefulqode@gmail.com">
                      <i className="fas fa-envelope"></i>
                      <span>peacefulqode@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pq-bottom-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="main-home.html">
                  <img
                    className="img-fluid logo"
                    src="~/assets/brand.png"
                    alt="techtrix"
                  />
                </a>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div id="pq-menu-contain" className="pq-menu-contain">
                    <ul id="pq-main-menu" className="navbar-nav ml-auto">
                      <li className="menu-item current-menu-item manu-item-has-children">
                        <a href="#">Home</a>
                        <i className="fa fa-chevron-down pq-submenu-icon"></i>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="main-home.html" aria-current="page">
                              Main Home
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="home-modern.html">home modern</a>
                          </li>
                          <li className="menu-item current-menu-item">
                            <a href="start-up-home.html">Start Up Home</a>
                          </li>
                          <li className="menu-item">
                            <a href="it-agency.html">IT Agency</a>
                          </li>
                          <li className="menu-item">
                            <a href="software-company.html">Software Company</a>
                          </li>
                          <li className="menu-item">
                            <a href="home-classic.html">home classic</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#">Services</a>
                        <i className="fa fa-chevron-down pq-submenu-icon"></i>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="software-development.html">
                              Software Development
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="web-development.html">Web Development</a>
                          </li>
                          <li className="menu-item">
                            <a href="mobile-development.html">
                              Mobile Development
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="app-development.html">App Development</a>
                          </li>
                          <li className="menu-item">
                            <a href="qa-testing.html">QA Testing</a>
                          </li>
                          <li className="menu-item">
                            <a href="product-design.html">Product Design</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#">Pages</a>
                        <i className="fa fa-chevron-down pq-submenu-icon"></i>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li className="menu-item">
                            <a href="services.html">Our Services</a>
                          </li>
                          <li className="menu-item">
                            <a href="our-team.html">Our Team</a>
                          </li>
                          <li className="menu-item">
                            <a href="leadership.html">leadership</a>
                          </li>
                          <li className="menu-item">
                            <a href="pricing-plan.html">Pricing Plan</a>
                          </li>
                          <li className="menu-item">
                            <a href="faq.html">Faq</a>
                          </li>
                          <li className="menu-item">
                            <a href="404.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#">Portfolio</a>
                        <i className="fa fa-chevron-down pq-submenu-icon"></i>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-has-children">
                            <a href="#">Types</a>
                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="standard.html">Standard</a>
                              </li>
                              <li className="menu-item">
                                <a href="masonry.html">Masonry</a>
                              </li>
                              <li className="menu-item">
                                <a href="masonry-joined.html">Masonry Joined</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="#">Columns</a>
                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="2-columns.html">2 columns</a>
                              </li>
                              <li className="menu-item">
                                <a href="3-columns.html">3 columns</a>
                              </li>
                              <li className="menu-item">
                                <a href="3-columns-wide.html">3 columns Wide</a>
                              </li>
                              <li className="menu-item">
                                <a href="4-columns-wide.html">4 columns Wide</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="portfolio-single.html">Portfolio Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#">Blog</a>
                        <i className="fa fa-chevron-down pq-submenu-icon"></i>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-has-children">
                            <a href="#">Grid Style</a>
                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="one-column-blog.html">
                                  One Column Blog
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="two-column-blog.html">
                                  Two Column Blog
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="three-column-blog.html">
                                  Three Column Blog
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="#">Blog Sidebar</a>
                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="blog-right-sidebar.html">
                                  Blog Right Sidebar
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="blog-left-sidebar.html">
                                  Blog Left Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="app-promotes-sales-profits-in-it-solutions.html">
                              Blog Single
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pq-menu-search-block">
                  <a href="javascript:void(0)" id="pq-seacrh-btn">
                    <i className="fa fa-search"></i>
                  </a>
                  <div className="pq-search-form">
                    <form
                      role="search"
                      method="get"
                      className="search-form"
                      action="https://techtrix.peacefulqode.com/"
                    >
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search …"
                          value=""
                          name="s"
                        />
                      </label>
                      <button type="submit" className="search-submit">
                        <span className="screen-reader-text">Search</span>
                      </button>
                    </form>
                  </div>
                </div>
                <a
                  href="https://techtrix.peacefulqode.com/contact-us/"
                  className="pq-button"
                >
                  <div className="pq-button-block">
                    <span className="pq-button-text">Free Quote</span>
                  </div>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
