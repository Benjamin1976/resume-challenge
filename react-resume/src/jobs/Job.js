import React, { Fragment } from "react";
import Section from "../common/Section";
import { formatDate } from "../common/common";

const Job = ({ job, idx }) => {
  let k = idx;

  return !job ? (
    <div key={["job-not-loaded", k].join("-")}>unable to load job</div>
  ) : (
    job.map((details, dIdx) => {
      const { title, position, start, end, role, current, project } = details;
      let k2 = [idx, dIdx].join("-");
      return (
        <Fragment key={"fragment-" + k2}>
          <div
            className="row border-bottom"
            key={[k2, "row", "position"].join("-")}
          >
            <div
              className="col col-4 jobheading"
              key={[k2, "col", "title"].join("-")}
            >
              {title || ""}
            </div>
            <div className="col col-4" key={[k2, "col", "position"].join("-")}>
              {position || ""}
            </div>
            <div
              className="col col-4 date"
              key={[k2, "col", "dates"].join("-")}
            >
              <span className="float-end">
                {start ? formatDate(start) : ""}
                {end ? " - " + formatDate(end) : current ? " - today" : ""}
              </span>
            </div>
          </div>
          {project ? (
            <Section k2={k2} title={"Project"} sectionText={project} />
          ) : (
            ""
          )}
          {role ? <Section k2={k2} title={"Role"} sectionText={role} /> : ""}
        </Fragment>
      );
    })
  );
};

export default Job;
