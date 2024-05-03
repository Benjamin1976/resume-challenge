import React from "react";
import About from "./About";
import ScrollTop from "../common/ScrollTop";
// import ShowHideButton from "../common/ShowHideButton";

const Abouts = ({ name, abouts }) => {
  let kWord = "About";
  if (!abouts) return <div>loading {kWord}</div>;
  const aboutsGrpd = Object.groupBy(abouts, ({ section }) => section);

  return (
    <div className="container">
      <div
        className="row heading bg-primary text-white"
        key={[kWord, "row", "title"].join("-")}
      >
        <div className="col col-8" key={[kWord, "col", "title"].join("-")}>
          {kWord}
        </div>
        <div
          className="col col-4 text-end"
          key={[kWord, "col", "scrollTop"].join("-")}
        >
          <ScrollTop />
        </div>
      </div>
      {Object.keys(aboutsGrpd).map((aboutGrp, idx) => {
        return (
          <About
            idx={idx}
            aboutTitle={aboutGrp}
            aboutGrp={aboutsGrpd[aboutGrp]}
            key={[kWord, idx].join("-")}
          />
        );
      })}
    </div>
  );
};

export default Abouts;
