import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import getAndUpdateCounter from "../counter";
import { urls } from "../cloudprovider";
import HideButton from "./HideButton";
import VisitsButton from "./VisitsButton";
import Certificates from "../certifications/Certificates";

const HeaderNavBar = ({ showHideButton }) => {
  let location = useLocation();
  showHideButton = !location.pathname.includes("/blog");

  useEffect(() => {
    getAndUpdateCounter(urls);
  }, []);

  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-sm-4 col-md-4  my-auto">
          <h2 style={{ display: "inline" }}>Benjamin Parsons</h2>
        </div>
        <div className="col-sm-4 col-md-4  my-auto">
          <span className="float-end">
            <Certificates />
          </span>
        </div>
        <div className="col-sm-4 col-md-4 h-100 my-auto">
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
