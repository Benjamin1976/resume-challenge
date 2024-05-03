import React from "react";
import Job from "./Job";
import ScrollTop from "../common/ScrollTop";
// import ShowHideButton from "../common/ShowHideButton";

const Jobs = ({ jobs }) => {
  let kWord = "Jobs";
  if (!jobs) return <div>loading {kWord}</div>;

  const jobsGrpd = Object.groupBy(jobs, ({ company }) => company);
  return (
    <div className="container">
      <div
        className="row heading bg-primary text-white"
        key={[kWord, "row", "title"].join("-")}
      >
        <div
          id="jobs"
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
      {Object.keys(jobsGrpd).map((company, idx) => {
        let k2 = [kWord, idx].join("-");
        return (
          <div
            className="row jobs-collapse"
            key={[k2, "row"].join("-")}
            id={`jobsCollapseAll`}
          >
            <div className="col col-12" key={[k2, "col"].join("-")}>
              <div className="row " key={[k2, "row", 1].join("-")}>
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
                  ></Job>
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
