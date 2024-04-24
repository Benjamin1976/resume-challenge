import resume from "./json/cv.json";
import Jobs from "./jobs/Jobs";
import SkillGroups from "./skills/SkillGroups";
import Educations from "./education/Educations";
import Certifications from "./certifications/Certifications";
import Abouts from "./about/Abouts";
import Contacts from "./contacts/Contacts";
import Links from "./links/Links";
import { useEffect } from "react";
import NavBar from "./common/NavBar";

const abouts = resume.about;
const contacts = resume.contacts;
const links = resume.links;
const jobs = resume.experience;
const skillgroups = resume.skills;
const edus = resume.education;
const certs = resume.certifcations;

function App() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // var aws = 0;
    var azure = 2;
    var urls = [
      "https://k7ib9cxbs4.execute-api.us-east-1.amazonaws.com/test/DynamoDBManager",
      "https://bens-resume-challenge-api.azure-api.net/bens-resume-challenge-http-api?name=Weanie",
      "https://bens-resume-challenge-visits.azurewebsites.net/api/get-visits",
      "https://bens-resume-challenge-visits.azurewebsites.net/api/post-visits",
    ];

    function updateCounter(newVisits) {
      fetch(urls[azure + 1], {
        method: "POST",
        body: JSON.stringify({ visits: newVisits }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => console.log(err));
    }

    fetch(urls[azure], {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        // console.log(data);
        let visits = parseInt(data.visits);
        visits++;
        document.getElementById("counter").innerText = visits;
        updateCounter(visits);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-0 col-md-3 col-md-3"> </div>
        <div id="heading-top" className="col-sm-12 col-md-9">
          <h2 style={{ display: "inline" }}>Benjamin Parsons</h2>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-sm btn-primary text-bottom"
            >
              Visits{" "}
              <span id="counter" className="badge badge-light">
                -
              </span>
            </button>
          </span>
        </div>
        {/* <div className="col-sm-3 col-md-3 text-end mt-2"></div> */}
      </div>
      <div className="row pt-2">
        <div className="col-md-3 col-sm-3"></div>
        <div className="col-md-9 col-sm-9">
          <NavBar />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-3 col-sm-3">
          <div className="row mx-1 left-panel">
            <div className="col">Picture</div>
          </div>
          <div className="row mx-1 left-panel">
            <div className="col">
              <Contacts contacts={contacts} />
            </div>
          </div>
          <div className="row mx-1 mb-3 left-panel">
            <div className="col">
              <Links links={links} />
            </div>
          </div>

          {/* <div className="row left-panel">
            <div className="col">
              <Links links={links} />
            </div>
          </div> */}
        </div>
        <div className="col-md-9 col-sm-9">
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
