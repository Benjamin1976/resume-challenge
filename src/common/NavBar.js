import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-sm navbar-expand-md navbar-dark bg-primary">
    <div className="container-fluid">
      <button
        className="navbar-toggler btn-sm navbar-menu-text"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon small "></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="#Top">
            About
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#jobs">
            Jobs
          </a>
          <a className="nav-link" href="#certifications">
            Certifications
          </a>
          <a className="nav-link" href="#education">
            Education
          </a>
          {/* <a
            className="nav-link disabled"
            href="#"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a> */}
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
