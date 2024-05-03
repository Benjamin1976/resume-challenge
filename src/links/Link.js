import React from "react";
import { checkContactType } from "../common/common";

const Link = ({ link, idx }) => {
  let k = idx;
  let kWord = "link";
  let k2 = [kWord, k].join("-");

  if (!link)
    return (
      <div key={[kWord, "not-loaded", k].join("-")}>unable to load {kWord}</div>
    );

  const { name, type, details } = link;
  return (
    <div className="row" key={[k2, "row"].join("-")}>
      <div className="col col-xs-12" key={[k2, "col", "type"].join("-")}>
        {type || ""}
      </div>
      <div
        className="col col-xs-8 contact"
        key={[k2, "col", "details"].join("-")}
      >
        {details ? checkContactType(type, name, details) : ""}
      </div>
    </div>
  );
};

export default Link;
