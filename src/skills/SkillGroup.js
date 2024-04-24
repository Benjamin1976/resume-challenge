import React from "react";
import "../Custom.css";
// import ShowHideButton from "../common/ShowHideButton";
import Skill from "./Skill";

const SkillGroup = ({ skillGrp, idx }) => {
  let k = idx;
  let kWord = "SkillGrp";
  if (!skillGrp)
    return (
      <div key={[kWord, "not-loaded", k].join("-")}>unable to load {kWord}</div>
    );

  let k2 = [kWord, idx].join("-");
  return (
    <div
      className="row skillsAll-collapse"
      id={`skillsAllCollapseAll`}
      key={[k2, "row"].join("-")}
    >
      <div className="col col-12" key={[k2, "col", 0].join("-")}>
        <div className="row subheading" key={[k2, "row", 1].join("-")}>
          <div className="col col-8" key={[k2, "col", 11].join("-")}>
            {skillGrp.title}{" "}
          </div>
          <div className="col col-4" key={[k2, "col", 12].join("-")}>
            {/* <ShowHideButton
              target={`#skillsEach-collapse-${idx}`}
              controls={"skillsEachCollapseAll"}
              collapse={"true"}
            /> */}
          </div>
        </div>
        <div
          className="row skillsEach-collapse"
          key={[k2, "row", 2].join("-")}
          id={`skillsEachCollapse-${idx}`}
        >
          <div className="col col-12" key={[k2, "col", 21].join("-")}>
            <ul
              className="list-group list-group-flush b-0 m-2"
              key={[k2, "ul"].join("-")}
            >
              {skillGrp.skills.map((skill, dIdx) => (
                <Skill
                  skill={skill}
                  k={[kWord, idx, dIdx].join("-")}
                  key={[kWord, idx, dIdx].join("-")}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;
