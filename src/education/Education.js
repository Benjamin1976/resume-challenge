import React from "react";
import { formatDate } from "../common/common";

const Education = ({ edu, idx }) => {
  let k = idx;
  let kWord = "education";
  let k2 = [kWord, k].join("-");

  if (!edu)
    return (
      <div key={[k2, "-not-loaded"].join("-")}>unable to load {kWord}</div>
    );

  const { institute, course, start, end } = edu;
  return (
    <div className="row m-2 pt-2" key={[k2, "row"].join("-")}>
      <div className="col col-4" key={[k2, "col", "institute"].join("-")}>
        {institute || ""}
      </div>
      <div className="col col-4" key={[k2, "col", "course"].join("-")}>
        {course || ""}
      </div>
      <div className="col col-4 date" key={[k2, "col", "dates"].join("-")}>
        {start ? formatDate(start) : ""}
        {end ? " - " + formatDate(end) : ""}
      </div>
    </div>
  );
};

export default Education;
