import React from 'react'

export default function About() {
  return (
    <section className="pq-bg-grey pq-bg-img-1 business" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title"># about us</span>
              <h5
                className="pq-section-title added"
                id="technology"
                data-high_text="Technology"
                data-title_text="We Increasing Business Success With Technology"
                data-rough_color="#fd4a18"
                data-rough_type="underline"
              >
                {" "}
                What is
                <span className="last-word"> Fliprate </span>
                {/* <svg className="rough-annotation" style="position: absolute; top: 0px; left: 0px; overflow: visible; pointer-events: none; width: 100px; height: 100px;"><path d="M329.09834703310634 110.87676795062575 C406.7816123741517 114.83895065490636, 483.63868677483083 113.44129780241624, 593.7066609127262 111.38006408048757" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 264.665; stroke-dasharray: 264.665; animation: 399.971ms ease-out 0ms 1 normal forwards running rough-notation-dash;"></path><path d="M592.205439909576 113.60176151468805 C491.6833593462262 113.91137582635497, 394.883696446868 115.66909045902291, 327.53991453217697 111.97929321339683" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 264.704; stroke-dasharray: 264.704; animation: 400.029ms ease-out 399.971ms 1 normal forwards running rough-notation-dash;"></path></svg><svg className="rough-annotation" style="position: absolute; top: 0px; left: 0px; overflow: visible; pointer-events: none; width: 100px; height: 100px;"><path d="M329.52674554605164 112.2060583342935 C430.1980338834391 113.65410383151658, 528.9923559847815 112.52726316534425, 591.8897582767178 112.92794419490164" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 262.367; stroke-dasharray: 262.367; animation: 396.805ms ease-out 0ms 1 normal forwards running rough-notation-dash;"></path><path d="M595.6123290782008 113.6625397062015 C517.1301618410915 109.57729732657698, 438.55974181319385 113.25263132068761, 329.06365932477314 113.69458162552029" fill="none" stroke="#fd4a18" stroke-width="2" style="stroke-dashoffset: 266.592; stroke-dasharray: 266.592; animation: 403.195ms ease-out 396.805ms 1 normal forwards running rough-notation-dash;"></path></svg> */}
              </h5>
              <p className="pq-section-description">
                Fliprate technologies is a leading solutions provider in the
                crypto currency space, working with companies leveraging
                blockchain technology to facilitate currency flows across
                borders. With blockchain, payments are set to be low – cost
                secure and processed quickly. Our Services include
              </p>
            </div>
            <ul className="pq-list-check mb-4">
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span>
                    Build web3 technology. Our team of engineers and developers
                    are positioned to help you build web3 solutions, ensuring
                    your technology is seamless, safe and secure.
                  </span>
                </a>
              </li>
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span>
                    Supply of Bulk crypto currency. We provide large amounts of
                    crypto currency to payment companies, assisting their
                    capacity to deliver settlements to their customers and on
                    time.
                  </span>
                </a>
              </li>
              <li className="pq-list-item">
                <a href="#">
                  <i className="ion ion-android-done-all"></i>
                  <span>
                    Provide Advisory services / a think tank designed to engage
                    web3 organizations as well as government agencies and
                    regulators. 
                  </span>
                </a>
              </li>
            </ul>
            <a href="#our-services" className="pq-button">
              <div className="pq-button-block">
                <span className="pq-button-text">Read More</span>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-lg-0">
            <div className="about-us-img">
              <img
                src="https://img.freepik.com/premium-photo/african-business-team-briefing-discussing-ideas-new-startup-project_484651-18542.jpg"
                // src="/assets/images/about-us/4.jpg"
                className="pq-image6  wow zoomIn animated"
                alt=""
              />
              <img
                // src="/assets/images/about-us/5.jpg"
                src="https://img.freepik.com/free-photo/industrial-designers-working-3d-model_23-2149370120.jpg"
                className="pq-image7  wow fadeInLeft animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
