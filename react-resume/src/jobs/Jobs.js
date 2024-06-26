import React from "react";
import Job from "./Job";
import Heading from "../common/Heading";

const Jobs = ({ jobs }) => {
  let kWord = "Jobs";
  if (!jobs) return <div>loading {kWord}</div>;

  const jobsGrpd = Object.groupBy(jobs, ({ company }) => company);
  return (
    <div className="container">
      <Heading kWord={kWord} />
      {Object.keys(jobsGrpd).map((company, idx) => {
        let k2 = [kWord, idx].join("-");
        return (
          <div
            key={[k2, "row"].join("-")}
            className="row show collapseAll"
            id={`collapse${kWord}`}
          >
            <div className="col col-12" key={[k2, "col"].join("-")}>
              <div className="row" key={[k2, "row", 1].join("-")}>
                <div className="col col-12 " key={[k2, "col", 11].join("-")}>
                  <p className="companyheading">{company}</p>
                </div>
              </div>
              <div className="row " key={[k2, "row", 2].join("-")}>
                <div className="col col-12" key={[k2, "col", 21].join("-")}>
                  <Job
                    idx={idx}
                    jobTitle={company}
                    job={jobsGrpd[company]}
                    key={[kWord, idx].join("-")}
                  />
                </div>
              </div>
              <div className="row" key={[k2, "row", 1].join("-")}>
                <div
                  className="col col-12 m-0 p-0"
                  key={[k2, "col", 11].join("-")}
                >
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
