import React, { Fragment } from "react";
import "../Custom.css";
import Section from "../common/Section";

const Job = ({ job, idx }) => {
  let k = idx;

  const formatDate = (date) => {
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let theDate = new Date(date);
    // let options = { year: "numeric", month: "long" };
    let theMonth = theDate.toLocaleString("default", { month: "long" });
    let theYear = theDate.toLocaleString("default", { year: "numeric" });
    return theMonth.substring(0, 3) + "-" + theYear;
  };

  return !job ? (
    <div key={["job-not-loaded", k].join("-")}>unable to load job</div>
  ) : (
    job.map((details, dIdx) => {
      const { title, position, start, end, role, project } = details;
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
              {/* <p className="font-weight-bold">{title || ""}</p> */}
              {title || ""}
            </div>
            <div className="col col-4" key={[k2, "col", "position"].join("-")}>
              {position || ""}
            </div>
            <div
              className="col col-4 date"
              key={[k2, "col", "dates"].join("-")}
            >
              {start ? formatDate(start) : ""}
              {end ? " - " + formatDate(end) : ""}
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
