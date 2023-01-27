import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => (
  <div>
    <div className="container w-75  d-flex align-items-center justify-content-center mt-3">
      <nav aria-label="breadcrumb d-flex align-items-center">
        <ol className="breadcrumb mt-3 bg-glass ">
          <li className="breadcrumb-item">
            <Link to={`/`}>Sports</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/tweets`}>Tweets</Link>
          </li>
        </ol>
      </nav>
    </div>
    <div className="container-fluid mt-5 mainContainer ">
      <div className="row">
        <div className="col-md  d-flex justify-content-center position-relative">
          <img
            src={banner1}
            className="img-fluid banner position-fixed "
            alt=""
          />
        </div>
        <div className="col-md-6  mainContent ">
          <Outlet />
        </div>
        <div className="col-md d-flex justify-content-center position-relative">
          <img
            src={banner2}
            className="img-fluid banner position-fixed"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);
