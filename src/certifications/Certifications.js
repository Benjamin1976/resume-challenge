import React from "react";
import Certification from "./Certification";
import ScrollTop from "../common/ScrollTop";

const Certifications = ({ certs }) => {
  let kWord = "Certifications";
  if (!certs) return <div>loading {kWord}</div>;

  return (
    <div className="container">
      <div className="row heading" key={[kWord, "row", "title"].join("-")}>
        <div
          id="certifications"
          className="col col-8"
          key={[kWord, "col", "title"].join("-")}
        >
          {kWord}
        </div>
        <div
          id="certifications"
          className="col col-4 text-end"
          key={[kWord, "col", "scrollTop"].join("-")}
        >
          <ScrollTop />
        </div>
      </div>
      {certs.map((cert, idx) => (
        <Certification idx={idx} cert={cert} key={[kWord, idx].join("-")} />
      ))}
    </div>
  );
};

export default Certifications;
