import resume from "./json/cv.json";
import Jobs from "./jobs/Jobs";
import SkillGroups from "./skills/SkillGroups";
import Educations from "./education/Educations";
import Certifications from "./certifications/Certifications";
import Abouts from "./about/Abouts";
import Contacts from "./contacts/Contacts";
import { useEffect, useState } from "react";
import NavBar from "./common/NavBar";
import { urls } from "./cloudprovider";
import getAndUpdateCounter from "./counter";
import "./custom.css";

const abouts = resume.about;
const contacts = resume.contacts;
const jobs = resume.experience;
const skillgroups = resume.skills;
const edus = resume.education;
const certs = resume.certifcations;

function App() {
  const [collapse, setCollapse] = useState(false);
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAndUpdateCounter(urls);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div id="heading-top" className="col-sm-12 col-md-12">
          <h2 style={{ display: "inline" }}>Benjamin Parsons</h2>
          <span className="float-end">
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
            </button>{" "}
            <button type="button" className="btn btn-sm btn-primary">
              Visits{" "}
              <span id="counter" className="badge badge-light">
                -
              </span>
            </button>
          </span>
        </div>
      </div>
      <div className="row pt-2 m-0">
        <div className="col-md-12 col-sm-12 m-0">
          <NavBar />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12">
          <div className="row mx-1 left-panel">
            <div className="col">
              <Contacts contacts={contacts} section={"Contacts"} />
            </div>
          </div>
          {/* <div className="row mx-1 mb-3 left-panel">
            <div className="col">
              <Links links={links} />
            </div>
          </div> */}
          <div className="row mt-2">
            <div className="col">
              <Abouts abouts={abouts} name={resume.name} section={"About"} />
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <SkillGroups skillgroups={skillgroups} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Jobs section={"Jobs"} jobs={jobs} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Certifications certs={certs} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Educations edus={edus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
