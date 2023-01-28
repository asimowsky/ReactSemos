import React from "react";
import leagueLogo from "../images/premierleague.png";
import { News, Highlights } from "../constants";
import messi from "../images/messi.png";
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
          <div className="col-md-6">
            {News.map((sports) => (
              <div key={sports.id}>
                <div className="card sportCard w-full">
                  <img src={sports.image} className="img-fluid" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{sports.title}</h5>
                    <p className="card-text">{sports.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md d-flex justify-content-center">
            <div className="tweetBg p-4 d-flex justify-content-center flex-column">
              <h1 className="text-center">Highlights</h1>
              {Highlights.map((data) => (
                <div key={data.id}>
                  <p className="text-center">{data.title}</p>
                  <iframe
                    src={data.url}
                    frameborder="0"
                    className="w-full"
                    style={{ borderRadius: "20px" }}
                  ></iframe>
                </div>
              ))}
              {Highlights.map((data) => (
                <div key={data.id}>
                  <p className="text-center">{data.title}</p>
                  <iframe
                    src={data.url}
                    frameborder="0"
                    className="w-full"
                    style={{ borderRadius: "20px" }}
                  ></iframe>
                </div>
              ))}
              <img
                src={messi}
                className="img-fluid"
                style={{ width: "300px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
