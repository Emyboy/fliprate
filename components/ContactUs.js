import React from 'react'

export default function ContactUs() {
  return (
    <section className="benefit pq-pt-100 pq-bg-dark" id="contact-form">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            {/* <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title"># our benefits</span>
              <h5
                className="pq-section-title added text-white"
                id="digital"
                data-high_text="Digital"
                data-title_text="Some Of Our Digital IT Services"
                data-rough_color="#fd4a18"
                data-rough_type="underline"
              >
                {" "}
                Some Of Our <span className="last-word"> Digital </span>
                IT Services{" "}
              </h5>
              <p className="pq-section-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humou.
              </p>
            </div>
            <ul className="pq-list-check mb-4">
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ooking at its layout
                  </span>
                </a>
              </li>
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span className="text-white">
                    Vestibulum blandit justo at felis dapibus varius
                    more-or-less.
                  </span>
                </a>
              </li>
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span className="text-white">
                    Nunc ut risus suscipit, egestas diam in, consequat odio use
                    Lorem Ipsum.
                  </span>
                </a>
              </li>
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span className="text-white">
                    Proin sed nunc consectetur, convallis risus nec, efficitur
                    felis.
                  </span>
                </a>
              </li>
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ooking at its layout
                  </span>
                </a>
              </li>
            </ul>
            <a href="about-us.html" className="pq-button">
              <div className="pq-button-block">
                <span className="pq-button-text">Read More</span>
              </div>
            </a> */}
          </div>
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div className="inquiry-form pq-bg-grey">
              <div className="pq-form-section pq-style-1 text-center">
                <span className="pq-form-sub-title"># help you 24/7</span>
                <h5 className="pq-form-title">React Out To Us</h5>
              </div>
              <form action="#" className="pq-applyform">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="first-name"
                      className="pq-bg-white name-field"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="e-mail"
                      className="pq-bg-white e-mail-field"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="country"
                      className="pq-bg-white e-mail-field"
                      placeholder="Country"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="state"
                      className="pq-bg-white e-mail-field"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <select
                      className="pq-bg-white e-mail-field mb-3"
                      style={{ borderColor: "#e9ecef", color: "#6c757d" }}
                    >
                      <option>Select Service</option>
                      <option>Build web3 technology</option>
                      <option>Supply of Bulk crypto currency</option>
                      <option>Provide Advisory services</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="your-message"
                      id="message"
                      className="pq-bg-white"
                      cols="10"
                      rows="4"
                      placeholder="Additional Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <a className="pq-button form-btn">
                      <div className="pq-button-block">
                        <span className="pq-button-text">Submit Now</span>
                      </div>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
