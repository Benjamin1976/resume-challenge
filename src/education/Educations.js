import React from "react";
import Education from "./Education";
import ScrollTop from "../common/ScrollTop";

const Educations = ({ edus }) => {
  let kWord = "Education";
  if (!edus) return <div>loading {kWord}</div>;

  return (
    <div className="container">
      <div
        className="row heading bg-primary text-white"
        key={[kWord, "row", "title"].join("-")}
      >
        <div
          id="education"
          className="col col-8"
          key={[kWord, "col", "title"].join("-")}
        >
          {kWord}
        </div>
        <div
          className="col col-4 text-end"
          key={[kWord, "col", "scrollTop"].join("-")}
        >
          <ScrollTop />
        </div>
      </div>
      {edus.map((edu, idx) => (
        <Education idx={idx} edu={edu} key={[kWord, idx].join("-")} />
      ))}
    </div>
  );
};

export default Educations;
