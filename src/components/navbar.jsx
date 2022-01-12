import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light ayush-navbar akm shadow">
      <div className="container-fluid-ayush">
        <Link className="navbar-brand" to="/">
          NIFTY50
        </Link>
        <Link className="navbar-brand" to="/">
          SENSEX
        </Link>
      </div>
      <div
        navbar-link-prop
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ padding: "0px 60px" }}
      >
        <div className="ms-auto">
          <Link to="/" id="navbarSupportedContent">
            <img
              src="./images/grostoxite.png"
              className="nav-img"
              alternate="Some image"
            />
          </Link>
        </div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <NavLink
              className="nav-link navbar-link-prop"
              aria-current="page"
              to="/"
            >
              Dasboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/orders">
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navbar-link-prop" to="/holdings">
              Holdings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navbar-link-prop" to="/profile">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
