import React, { Fragment, useState } from "react";

const BuildForm = ({ fields }) => {
  const [build, setBuild] = useState(fields);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // send build values to lambda function
      // check if any builds are in queue
      //    if none in queue, add this to queue and wait 30 seconds
      //        set timeout on useEffect to 30 seconds
      //    if items in queue
      //        advise cannot process.  try again later
      //        mark as busy in db
      //        remove timeout on useEffect
      // after 30 secs, check if no further added to queue
      //    if none in queue, run the process to execute the build
      //        check build status every minute
      //            set timeout on useEffect to 60 seconds
      //        once built
      //            update the db status
      //            provide the link
      //            mark as completed in db
      //    if items in queue, advise cannot process.  try again later
      //        advise cannot process.  try again later
      //        mark as busy in db
      //        remove timeout on useEffect
    } catch (err) {
      console.log(err);
    }
  };

  const onRadioChange = (field, option) => {
    let newBuild = build.map((buildType) =>
      buildType.name === field ? { ...buildType, value: option } : buildType
    );
    setBuild(newBuild);
  };

  return (
    <form>
      {fields &&
        fields.map((field, setIdx) => (
          <Fragment key={`fragment-${setIdx}`}>
            <h5 key={`title-${setIdx}`}>{field.name}</h5>
            {field.options.map((opt, optIdx) => {
              let setName = `input-set-${setIdx}`;
              let optName = setName + `-opt-${optIdx}`;
              return (
                <div className="form-check" key={optName + "-formclass"}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={setName}
                    id={optName}
                    key={optName + "-input"}
                    value={optName}
                    onChange={() => onRadioChange(field.name, opt.name)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={optName}
                    key={optName + "-label"}
                  >
                    {opt.name}
                  </label>
                </div>
              );
            })}
          </Fragment>
        ))}
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
export default BuildForm;
