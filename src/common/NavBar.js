import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-sm navbar-expand-md navbar-dark bg-secondary">
    <div className="container-fluid">
      {/* <span className="navbar-brand">Benjamin Parsons</span> */}
      <button
        className="navbar-toggler btn-sm navbar-menu-text"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Sections <span className="navbar-toggler-icon small"></span>
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
            Cerifications
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
