import React from "react";
import Certification from "./Certification";
import Heading from "../common/Heading";

const Certifications = ({ certs, section }) => {
  let kWord = section;
  if (!certs) return <div>loading {kWord}</div>;

  return (
    <div className="container">
      <Heading kWord={kWord} />
      <div className="row show collapseAll" id={`collapse${kWord}`}>
        {certs.map((cert, idx) => (
          <Certification idx={idx} cert={cert} key={[kWord, idx].join("-")} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
