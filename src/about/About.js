import React, { Fragment } from "react";

const About = ({ aboutTitle, aboutGrp, idx }) => {
  let k = idx;
  let kWord = "about";

  if (!aboutGrp || !aboutGrp.length)
    return (
      <div key={[kWord, "not-loaded", k].join("-")}>unable to load {kWord}</div>
    );

  return (
    <Fragment>
      <div
        className="row subheading"
        key={[kWord, k, "row", "title"].join("-")}
      >
        <div className="col col-8" key={[kWord, k, "col", "title"].join("-")}>
          {aboutTitle || ""}
        </div>
        <div className="col col-4" key={[kWord, k, "col", "button"].join("-")}>
          {/* <ShowHideButton
            target={`#aboutCollapse-${idx}`}
            controls={`aboutCollapse-${idx}`}
            collapse={"true"}
          /> */}
        </div>
      </div>
      {aboutGrp.map((about, aIdx) => {
        const { text } = about;
        let k2 = [kWord, aIdx, k].join("-");

        return (
          <div
            className="row bg-white m-1 pd-2"
            key={[k2, "row", "section"].join("-")}
          >
            <div
              className={`col col-12 about-collapse`}
              key={[k2, "col", "section"].join("-")}
              id={`aboutCollapse-${idx}`}
            >
              {text || ""}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default About;
