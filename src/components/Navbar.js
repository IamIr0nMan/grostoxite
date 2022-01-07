import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light ayush-navbar akm">
      <div className="container-fluid-ayush">
        <a class="navbar-brand" href="#">
          NIFTY50
        </a>
        <a class="navbar-brand" href="#">
          SENSEX
        </a>
      </div>

      <div
        class="collapse navbar-collapse navbar-right-part"
        id="navbarSupportedContent"
      >
        <img
          src="./images/grostoxite .png"
          className="nav-img"
          alternate="Some image"
        />
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Dasboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Orders
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Holdings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Position
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
