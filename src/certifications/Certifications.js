import React, { Fragment } from "react";
import Certification from "./Certification";
import Heading from "../common/Heading";

const Certifications = ({ certs }) => {
  let kWord = "Certifications";
  if (!certs) return <div>loading {kWord}</div>;

  return (
    <Fragment>
      <Heading kWord={kWord} />
      <div className="row show collapseAll" id={`collapse${kWord}`}>
        {certs.map((cert, idx) => (
          <Certification idx={idx} cert={cert} key={[kWord, idx].join("-")} />
        ))}
      </div>
    </Fragment>
  );
};

export default Certifications;
