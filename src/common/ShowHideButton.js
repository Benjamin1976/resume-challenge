import React from "react";

const ShowHideButton = ({ target, controls, collapse }) => {
  return (
    <button
      className="btn btn-sm btn-secondary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={target}
      aria-expanded={collapse}
      aria-controls={controls}
    >
      Show / Hide
    </button>
  );
};

export default ShowHideButton;
