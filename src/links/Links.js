import React from "react";
import Link from "./Link";

const Links = ({ links }) => {
  let kWord = "Links";
  if (!links) return <div>loading {kWord}</div>;
  return (
    <div className="container">
      {/* <div className="row contactheading" key={[kWord, "title"].join("-")}>
        {kWord}
      </div> */}
      {links.map((link, idx) => (
        <Link idx={idx} link={link} key={[kWord, idx].join("-")} />
      ))}
    </div>
  );
};

export default Links;
