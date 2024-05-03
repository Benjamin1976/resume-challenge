import React, { Fragment } from "react";
import SkillGroup from "./SkillGroup";
import Heading from "../common/Heading";

const SkillGroups = ({ skillgroups }) => {
  let kWord = "Skills";
  if (!skillgroups) return <div>loading {kWord}</div>;

  const skillList = (skillgroup, i) => (
    <Fragment>
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
    </Fragment>
  );

  const skillGroup = (skillgroup, i) => (
    <div
      className="row show collapseAll"
      id={`collapse${kWord}`}
      key={[kWord, "row", "skillsgroup", i].join("-")}
    >
      <div
        className="col col-6"
        key={[kWord, "col", "skillsgroup", i].join("-")}
      >
        {skillList(skillgroup, i)}
      </div>
      <div
        className="col col-6"
        key={[kWord, "col", "skillsgroup", i + 1].join("-")}
      >
        {skillList(skillgroup, i + 1)}
      </div>
    </div>
  );

  return (
    <Fragment>
      <Heading kWord={kWord} />
      {skillGroup(skillgroups, 0)}
      {skillGroup(skillgroups, 2)}
    </Fragment>
  );
};

export default SkillGroups;
