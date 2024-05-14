import React, { Fragment, useState } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

const BuildForm = ({ fields }) => {
  const [token, setToken] = useState({ databa });
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(token);
      // const res = await fetch("http://localhost:5000/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     token,
      //   }),
      // });
      // const data = await res.json();
      // console.log(data);
    } catch (err) {
      setRefreshReCaptcha(!refreshReCaptcha);
      console.log(err);
    }
  };

  const setTokenFunc = (getToken) => {
    setToken(getToken);
  };

  return (
    <form>
      {fields.map((field, setIdx) => (
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
      <GoogleReCaptchaProvider
        reCaptchaKey={`6LeIutopAAAAAPS6Hy0YlG-rTXxvZ6Fi5_9_AZJ1`}
      >
        <GoogleReCaptcha
          className="google-recaptcha-custom-class"
          onVerify={setTokenFunc}
          refreshReCaptcha={refreshReCaptcha}
        />
      </GoogleReCaptchaProvider>
    </form>
  );
};
export default BuildForm;
