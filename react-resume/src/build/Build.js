import React from "react";
import BuildForm from "./BuildForm";

const Build = () => {
  let fields = [
    {
      name: "Front-end",
      options: [{ name: "S3" }, { name: "Beanstalk" }, { name: "ECS" }],
      value: "",
    },
    {
      name: "Database",
      options: [{ name: "Cosmos DB" }, { name: "RDS" }, { name: "Maria" }],
      value: "",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col col-8">
          <h6 className="text-secondary">Resume Challenge Blog</h6>
        </div>
        <div className="col col-4 ">
          <span className="float-end">04 May 2024</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <BuildForm fields={fields} />
        </div>
      </div>
    </div>
  );
};

export default Build;
