// import logo from "./logo.svg";
// import "./App.css";

import resume from "./json/cv.json";
import Jobs from "./jobs/Jobs";
import SkillGroups from "./skills/SkillGroups";
import Educations from "./education/Educations";
import Certifications from "./certifications/Certifications";
import Abouts from "./about/Abouts";
import Contacts from "./contacts/Contacts";
import Links from "./links/Links";

const abouts = resume.about;
const contacts = resume.contacts;
const links = resume.links;
const jobs = resume.experience;
const skillgroups = resume.skills;
const edus = resume.education;
const certs = resume.certifcations;

function App() {
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-3">
          <div className="row left-panel">
            <div className="col">Picture</div>
          </div>
          <div className="row left-panel">
            <div className="col">
              <Contacts contacts={contacts} />
            </div>
          </div>
          <div className="row left-panel">
            <div className="col">
              <Links links={links} />
            </div>
          </div>
          <div className="row left-panel">
            <div className="col">
              <Links links={links} />
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col">
              <Abouts abouts={abouts} name={resume.name} />
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <SkillGroups skillgroups={skillgroups} />
              {/* <Jobs section={"Skills"} jobs={jobs} /> */}
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
