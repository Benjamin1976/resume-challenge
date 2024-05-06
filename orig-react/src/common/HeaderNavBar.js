import React, { Fragment, useEffect } from "react";
import NavBar from "./NavBar";
import getAndUpdateCounter from "../counter";
import { urls } from "../cloudprovider";
import HideButton from "./HideButton";
import VisitsButton from "./VisitsButton";
import { useLocation } from "react-router-dom";

const HeaderNavBar = ({ showHideButton }) => {
  let location = useLocation();
  showHideButton = !location.pathname.includes("/blog");

  useEffect(() => {
    getAndUpdateCounter(urls);
  }, []);

  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-12">
          <h2 style={{ display: "inline" }}>Benjamin Parsons</h2>
          <span className="float-end">
            {showHideButton ? <HideButton /> : ""}
            {showHideButton ? " " : ""}
            <VisitsButton />
          </span>
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-12 col-sm-12">
          <NavBar />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderNavBar;
