import React from "react";

const VisitsButton = () => (
  <button type="button" className="btn btn-sm btn-primary">
    Visits{" "}
    <span id="counter" className="badge badge-light">
      -
    </span>
  </button>
);

export default VisitsButton;
