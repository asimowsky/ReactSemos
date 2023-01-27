import { Routes, Route, Link } from "react-router-dom";
import myLogo from "../images/tajmmklogo.png";
export const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-dark bg-dark transparent d-flex justify-content-center">
        <a className="navbar-brand ">
          <img src={myLogo} style={{ width: "150px" }} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav d-flex align-items-center justify-content-center">
            <li className="nav-item active text-light">
              <Link to="/" className="text-white">
                News
              </Link>
            </li>
            <li className="nav-item text-white  ">
              <Link to="/About" className="text-white">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/TodoApp" className="text-white">
                Todo App
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
