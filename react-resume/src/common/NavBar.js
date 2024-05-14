import React from "react";

const NavBar = () => {
  let links = [
    { title: "About", ref: "#Top" },
    { title: "Skills", ref: "#skills" },
    { title: "Jobs", ref: "#jobs" },
    { title: "Certifications", ref: "#certifications" },
    { title: "Education", ref: "#education" },
    { title: "Blog", ref: "blog" },
    // { title: "Build", ref: "build" },
  ];
  return (
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
            {links.map((link) => (
              <a
                className="nav-link"
                href={"/" + link.ref}
                key={"link-" + link.title.toLowerCase()}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
