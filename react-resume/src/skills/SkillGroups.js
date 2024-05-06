import React from "react";
import SkillGroup from "./SkillGroup";
import Heading from "../common/Heading";

const SkillGroups = ({ skillgroups }) => {
  let kWord = "Skills";
  if (!skillgroups) return <div>loading {kWord}</div>;

  const skillList = (skillgroup, i) => {
    const sections = [
      skillgroup.title,
      <SkillGroup
        idx={i}
        skillGrp={skillgroup[i]}
        key={[kWord, i].join("-")}
      />,
    ];

    return sections.map((section, idx) => (
      <div className="row" key={[kWord, "row", "group-hdr", i, idx].join("-")}>
        <div
          className="col col-12"
          key={[kWord, "col", "group-hdr", i].join("-")}
        >
          {section}
        </div>
      </div>
    ));
  };

  const skillGroup = (skillgroup, i) => (
    <div
      className="row show collapseAll"
      id={`collapse${kWord}`}
      key={[kWord, "row", "skillsgroup", i].join("-")}
    >
      {[0, 1].map((arrIndex) => (
        <div
          className="col col-6"
          key={[kWord, "col", "skillsgroup", i + arrIndex].join("-")}
        >
          {skillList(skillgroup, i + arrIndex)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <Heading kWord={kWord} />
      {skillGroup(skillgroups, 0)}
      {skillGroup(skillgroups, 2)}
    </div>
  );
};

export default SkillGroups;
