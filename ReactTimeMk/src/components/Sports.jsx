import React from "react";
import leagueLogo from "../images/premierleague.png";
import { News, Highlights } from "../constants";

export const Sports = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center p-3">
        <img
          src={leagueLogo}
          className="img-fluid plLogoContrast "
          style={{ width: "100px" }}
        ></img>
      </div>
      <h1 className="text-center gradientHeading">Premier League News</h1>
      <div className="container p-5">
        <div className="row">
          <div className="col-md">
            {News.map((sports) => (
              <div key={sports.id}>
                <div className="card sportCard">
                  <img src={sports.image} className="img-fluid" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{sports.title}</h5>
                    <p className="card-text">{sports.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md">
            <div>
              <ul>
                {Highlights.map((data) => (
                  <div key={data.id}>
                    <p>{data.title}</p>
                    <iframe
                      src={data.url}
                      width="500"
                      height="315"
                      frameborder="0"
                    ></iframe>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
