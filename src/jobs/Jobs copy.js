import React from "react";
import Job from "./Job";
import ShowHideButton from "../common/ShowHideButton";

const Jobs = ({ jobs }) => {
  let kWord = "Jobs";
  if (!jobs) return <div>loading {kWord}</div>;

  const jobsGrpd = Object.groupBy(jobs, ({ company }) => company);
  //   console.log(jobsGrpd);
  return (
    <div className="container">
      <div className="row heading" key={[kWord, "row", "title"].join("-")}>
        <div className="col col-8" key={[kWord, "col", "title"].join("-")}>
          {kWord}
        </div>
        <div className="col col-4" key={[kWord, "col", "button"].join("-")}>
          <ShowHideButton
            target={".jobs-collapse"}
            controls={"jobsCollapseAll"}
            collapse={false}
          />
        </div>
      </div>
      {Object.keys(jobsGrpd).map((jobGrp, idx) => {
        let k2 = [kWord, idx].join("-");
        return (
          <div
            className="row jobs-collapse"
            key={["row", idx].join("-")}
            id={`jobsCollapseAll`}
          >
            <div className="col col-12" key={[k2, "col"].join("-")}>
              <div
                className="row jobheading"
                key={[k2, "row-job", 1].join("-")}
              >
                <div className="col col-12" key={[k2, "col-job", 1].join("-")}>
                  <h6>{jobGrp}</h6>
                </div>
              </div>
              <div className="row " key={[k2, "row-job", 2].join("-")}>
                <div className="col col-12" key={[k2, "col-job", 2].join("-")}>
                  <Job
                    idx={idx}
                    jobTitle={jobGrp}
                    job={jobsGrpd[jobGrp]}
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
