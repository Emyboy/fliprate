import React from 'react'

export default function EachTeam({ team }) {
  return (
    <div
      className="owl-item- col-md-4 col-sm-12 mb-3 cloned"
    //   style={{ width: "405.333px", marginRight: "30px" }}
    >
      <div className="item">
        <div className="pq-teambox-1">
          <div className="pq-team-img">
            <img src={team?.img} alt="team-image" />
          </div>
          <div className="pq-team-info">
            <h5>{team?.name}</h5>
            <span className="pq-team-designation">{team?.title}</span>
            {/* <div className="pq-team-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
