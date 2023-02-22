import React from "react";
import EachTeam from "./EachTeam";
import { TeamData } from "@/Data";

export default function OurTeam() {
  return (
    <section className="our-team pb-0" id='our-team'>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title"># people behind fliprate</span>
              <h5 className="pq-section-title">Our Team Members</h5>
            </div>
            <div className="pq-team">
              <div
                className="owl-carousel owl-loaded owl-drag"
                data-dots="false"
                data-nav="false"
                data-desk_num="3"
                data-lap_num="3"
                data-tab_num="2"
                data-mob_num="1"
                data-mob_sm="1"
                data-autoplay="true"
                data-loop="true"
                data-margin="30"
              >
                <div className="owl-stage-outer-">
                  <div
                    className="owl-stage- row justify-content-center"
                    // style="transform: translate3d(-2611px, 0px, 0px); transition: all 0.25s ease 0s; width: 5224px;"
                  >
                    {TeamData.map((team, index) => {
                      return <EachTeam key={index} team={team} />;
                    })}
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="ion-ios-arrow-back"></i>
                    <span></span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span></span>
                    <i className="ion-ios-arrow-forward"></i>
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
