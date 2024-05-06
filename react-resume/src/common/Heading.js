import React from "react";
import ScrollTop from "./ScrollTop";

const Heading = ({ kWord }) => {
  return (
    <div
      id={kWord.toLowerCase()}
      className="row bg-primary heading"
      key={[kWord, "row", "title"].join("-")}
    >
      <div className="col col-8" key={[kWord, "col", "title"].join("-")}>
        <a
          className="text-white"
          data-bs-toggle="collapse"
          href={`#collapse${kWord}`}
          role="button"
          aria-expanded="true"
          aria-controls={`collapse${kWord}`}
        >
          {kWord} <h1>Used different folder</h1>
        </a>
      </div>
      <div
        className="col col-4 text-end"
        key={[kWord, "col", "scrollTop"].join("-")}
      >
        <ScrollTop />
      </div>
    </div>
  );
};

export default Heading;
