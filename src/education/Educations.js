import React, { Fragment } from "react";
import Education from "./Education";
import Heading from "../common/Heading";

const Educations = ({ edus }) => {
  let kWord = "Education";
  if (!edus) return <div>loading {kWord}</div>;

  return (
    <Fragment>
      <Heading kWord={kWord} />
      <div className="row show collapseAll" id={`collapse${kWord}`}>
        {edus.map((edu, idx) => (
          <Education idx={idx} edu={edu} key={[kWord, idx].join("-")} />
        ))}
      </div>
    </Fragment>
  );
};

export default Educations;
