import resume from "./json/cv.json";
import Jobs from "./jobs/Jobs";
import SkillGroups from "./skills/SkillGroups";
import Certifications from "./certifications/Certifications";
import Abouts from "./about/Abouts";
import Contacts from "./contacts/Contacts";
// import "./custom.css";

const abouts = resume.about;
const contacts = resume.contacts;
const jobs = resume.experience;
const skillgroups = resume.skills;
const edus = resume.education;
const certs = resume.certifcations;

function Resume() {
  const sections = [
    <Contacts contacts={contacts} section={"Contacts"} />,
    <Abouts abouts={abouts} name={resume.name} section={"About"} />,
    <SkillGroups skillgroups={skillgroups} section={"Skills"} />,
    <Jobs jobs={jobs} section={"Jobs"} />,
    <Certifications certs={certs} section={"Certifications"} />,
    <Certifications certs={edus} section={"Education"} />,
  ];

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-12 p-0">
          {sections.map((section, idx) => (
            <div className="row mb-2" key={`section-${idx}`}>
              <div className="col ">{section}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
