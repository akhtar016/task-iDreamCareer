import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="custom-nav">
      <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand text-uppercase text-white" id="test" href="/">
          test
        </a>
        <button
          class="navbar-toggler bg-secondary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-dark custom-btn" href="/">
                Homepage <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                Our clients
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                careers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
