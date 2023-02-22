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
                    src="/brand.png"
                    alt="techtrix"
                  />
                </a>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div id="pq-menu-contain" className="pq-menu-contain">
                    <ul id="pq-main-menu" className="navbar-nav ml-auto">
                      <li className="menu-item manu-item-has-children">
                        <a href="#">Home</a>
                        <i className="fa  pq-submenu-icon"></i>
                      </li>
                      <li className="menu-item">
                        <a href="#">Services</a>
                        <i className="fa  pq-submenu-icon"></i>
                        
                      </li>
                      <li className="menu-item">
                        <a href="#">Pages</a>
                        <i className="fa  pq-submenu-icon"></i>
                      </li>
                      <li className="menu-item">
                        <a href="#">Portfolio</a>
                        <i className="fa  pq-submenu-icon"></i>
                        
                      </li>
                      <li className="menu-item">
                        <a href="#">Blog</a>
                        <i className="fa  pq-submenu-icon"></i>
                        
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
