import React from "react";
import "../Custom.css";

const Certification = ({ cert, idx }) => {
  let k = idx;
  let kWord = "certification";
  let k2 = [kWord, k].join("-");

  if (!cert)
    return (
      <div key={[k2, "-not-loaded"].join("-")}>unable to load {kWord}</div>
    );

  const { institute, course, start, end } = cert;
  return (
    <div className="row m-2 pt-2" key={[k2, "row"].join("-")}>
      <div className="col col-4" key={[k2, "col", "institute"].join("-")}>
        {institute || ""}
      </div>
      <div className="col col-4" key={[k2, "col", "course"].join("-")}>
        {course || ""}
      </div>
      <div className="col col-4 date" key={[k2, "col", "dates"].join("-")}>
        {start || ""}
        {end ? " - " + end : ""}
      </div>
    </div>
  );
};

export default Certification;
