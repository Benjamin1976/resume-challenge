import React from "react";
import About from "./About";
import Heading from "../common/Heading";

const Abouts = ({ name, abouts, section }) => {
  let kWord = section;
  if (!abouts) return <div>loading {kWord}</div>;
  const aboutsGrpd = Object.groupBy(abouts, ({ section }) => section);

  return (
    <div className="container">
      <Heading kWord={kWord} />
      <div className="row show collapseAll" id={`collapse${kWord}`}>
        <div className="col col-12">
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
      </div>
    </div>
  );
};

export default Abouts;
