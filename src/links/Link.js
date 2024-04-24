import React from "react";
import "../Custom.css";
import checkContactType from "../common/common";

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
    <div className="row contactrow" key={[k2, "row"].join("-")}>
      <div className="row" key={[k2, "row"].join("-")}>
        <div className="col col-xs-12" key={[k2, "col", "type"].join("-")}>
          {/* <h6 style={{ display: "inline-block" }}>{type || ""}</h6> */}
          {type || ""}
        </div>
        {/* <div className="row" key={[k2, "row"].join("-")}> */}
        <div
          className="col col-xs-8 contact"
          key={[k2, "col", "details"].join("-")}
        >
          {details ? checkContactType(type, name, details) : ""}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Link;
