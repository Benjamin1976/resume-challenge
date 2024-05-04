import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./Resume";
import Blog from "./Blog";
import HeaderNavBar from "./common/HeaderNavBar";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div id="heading-top" className="container">
          <HeaderNavBar showHideButton={true} />
          <Routes>
            <Route exact path="/" element={<Resume />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
