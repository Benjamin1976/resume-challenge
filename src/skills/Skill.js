import React from "react";
import "../Custom.css";

const Skill = ({ skill, k }) => {
  let kWord = "Skill";
  let k2 = [k, kWord].join("-");

  if (!skill)
    return <div key={[k2, "not-loaded"].join("-")}>unable to load {kWord}</div>;

  return (
    <li key={[k2, "ul"].join("-")} className="list-group-item skill p-1">
      {skill}
    </li>
  );
};

export default Skill;
