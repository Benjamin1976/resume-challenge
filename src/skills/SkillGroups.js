import React from "react";
import SkillGroup from "./SkillGroup";
import ScrollTop from "../common/ScrollTop";
// import ShowHideButton from "../common/ShowHideButton";

const SkillGroups = ({ skillgroups }) => {
  let kWord = "Skills";
  if (!skillgroups) return <div>loading {kWord}</div>;

  const skillGroup = (skillgroup, i) => (
    <div className="row" key={[kWord, "row", "skillsgroup", i].join("-")}>
      <div
        className="col col-6"
        key={[kWord, "col", "skillsgroup", i].join("-")}
      >
        <div className="row" key={[kWord, "row", "group-hdr", i].join("-")}>
          <div
            className="col col-12"
            key={[kWord, "col", "group-hdr", i].join("-")}
          >
            {skillgroup.title}
          </div>
        </div>
        <div className="row" key={[kWord, "row", "group-detail", i].join("-")}>
          <div
            className="col col-12"
            key={[kWord, "col", "group-detail", i].join("-")}
          >
            <SkillGroup
              idx={i}
              skillGrp={skillgroup[i]}
              key={[kWord, i].join("-")}
            />
          </div>
        </div>
      </div>
      <div
        className="col col-6"
        key={[kWord, "col", "skillsgroup", i + 1].join("-")}
      >
        <div className="row" key={[kWord, "row", "group-hdr", i + 1].join("-")}>
          <div
            className="col col-12"
            key={[kWord, "col", "group-hdr", i + 1].join("-")}
          >
            {skillgroup.title}
          </div>
        </div>
        <div
          className="row"
          key={[kWord, "row", "group-detail", i + 1].join("-")}
        >
          <div
            className="col col-12"
            key={[kWord, "col", "group-detail", i + 1].join("-")}
          >
            <SkillGroup
              idx={i + 1}
              skillGrp={skillgroup[i + 1]}
              key={[kWord, i + 1].join("-")}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row heading" key={[kWord, "row", "title"].join("-")}>
        <div
          id="skills"
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
      {skillGroup(skillgroups, 0)}
      {skillGroup(skillgroups, 2)}
    </div>
  );
};

export default SkillGroups;
