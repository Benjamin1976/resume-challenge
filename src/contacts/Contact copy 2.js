import React from "react";
import "../Custom.css";
import checkContactType from "../common/common";

const Contact = ({ contact, idx }) => {
  let k = idx;
  let kWord = "contact";
  let k2 = [kWord, k].join("-");

  if (!contact)
    return (
      <div key={[kWord, "not-loaded", k].join("-")}>unable to load {kWord}</div>
    );

  const { type, name, details } = contact;
  return (
    <div className="row contactrow" key={[k2, "row"].join("-")}>
      <div className="row" key={[k2, "row"].join("-")}>
        <div className="col col-xs-2" key={[k2, "col", "type"].join("-")}>
          <h6>{type || ""}</h6>
        </div>
        <div className="row" key={[k2, "row"].join("-")}>
          <div
            className="col col-xs-8 contact"
            key={[k2, "col", "details"].join("-")}
          >
            {details ? checkContactType(type, name, details) : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
