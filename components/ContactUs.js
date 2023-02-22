import React from 'react'

export default function ContactUs() {
  return (
    <section className="benefit pq-pt-200 pq-bg-dark" id="contact-form">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="pq-section pq-style-1 text-left">
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
                {/* <svg className="rough-annotation" style="position: absolute; top: 0px; left: 0px; overflow: visible; pointer-events: none; width: 100px; height: 100px;"><path d="M328.56256240513176 51.48110811505467 C373.6717226675144 58.331564934609126, 414.029722308254 57.44438219225187, 499.6121392538771 50.77704890165478" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 171.452; stroke-dasharray: 171.452; animation: 402.674ms ease-out 0ms 1 normal forwards running rough-notation-dash;"></path><path d="M499.53438069019467 53.2934213867411 C445.22595520425966 56.38735951356859, 395.84662307922554 53.36858074240656, 330.3965436676517 55.59063121583313" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 169.174; stroke-dasharray: 169.174; animation: 397.326ms ease-out 402.674ms 1 normal forwards running rough-notation-dash;"></path></svg><svg className="rough-annotation" style="position: absolute; top: 0px; left: 0px; overflow: visible; pointer-events: none; width: 100px; height: 100px;"><path d="M327.434815434739 52.007100285962224 C371.1038247866818 54.390965425540486, 415.3038686082291 53.29740610079912, 500.3542368095368 52.56815815158188" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 172.948; stroke-dasharray: 172.948; animation: 402.629ms ease-out 0ms 1 normal forwards running rough-notation-dash;"></path><path d="M497.6189640779048 54.218129543587565 C455.4560605243576 51.21455139311336, 410.33624969847153 54.40901422890209, 326.986447038129 50.816227523609996" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 170.69; stroke-dasharray: 170.69; animation: 397.371ms ease-out 402.629ms 1 normal forwards running rough-notation-dash;"></path></svg> */}
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
            </a>
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
                      placeholder="Your Name"
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
