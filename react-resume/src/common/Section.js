import React from "react";

const Section = ({ k2, title, sectionText }) => (
  <div className="row bg-white small m-2" key={[k2, "row", title, 1].join("-")}>
    <div className="col col-2" key={[k2, "col", title, 1].join("-")}>
      {title}:
    </div>
    <div className="col col-10" key={[k2, "col", title, 2].join("-")}>
      {sectionText || ""}
    </div>
  </div>
);

export default Section;
