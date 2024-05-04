import React, { useState } from "react";

const HideButton = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <button
      className="btn btn-sm btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`.collapseAll`}
      aria-expanded="true"
      aria-controls={`collapseAbout collapseSkills collapseJobs collapseCertifications  collapseEducation`}
      onClick={() => setCollapse(!collapse)}
    >
      {collapse ? "Show" : "Hide"} All
    </button>
  );
};

export default HideButton;
