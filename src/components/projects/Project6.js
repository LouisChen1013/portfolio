import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";

const Project5 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={process.env.PUBLIC_URL + "/images/camp_biology/home.png"}
        alt="home"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Camp Biology</h6>

          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/Camp-Biology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ml-4 github-icon" size={39} />
          </a>
          <a
            href="https://camp-biology.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgScreen className="ml-4 github-icon" size={39} />
          </a>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          animation={false}
          className="my-modal"
        >
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body className="px-0 py-0">
            <section className="s3">
              <div className="nav-wrapper">
                <div className="dots-wrapper">
                  <div
                    id="dot-1"
                    className="browser-dot modal-dot"
                    onClick={handleClose}
                  ></div>
                  <div id="dot-2" className="browser-dot"></div>
                  <div id="dot-3" className="browser-dot"></div>
                </div>
              </div>

              <div className="main-context">
                <h3>Camp Biology</h3>
                <h5>Objective:</h5>
                <p>
                  Camp Biloigy is a web application that allows you to share
                  your best campsites around the world. Once you sign-up, you
                  can begin to create your own campgrounds and comment on others
                  campsites. Get started exploring our amazing campgrounds!
                </p>
                <h5>Key Features: </h5>
                <ul>
                  <li>Full campsite description & information</li>
                  <li>Campsite details with map and images</li>
                  <li>User registration & login portals</li>
                  <li>Campground add & edit & delete functionalities</li>
                  <li>Campground reviews & ratings</li>
                </ul>
                <h5>Technologies: </h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Passport.js</li>
                  <li>EJS</li>
                  <li>Bootstrap</li>
                  <li>Cloudinary</li>
                  <li>Mapbox</li>
                  <li>MongoDB</li>
                  <li>Heroku</li>
                  <li>Git/Github</li>
                </ul>
                <a
                  href="https://camp-biology.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <br />
                <h5>Home page & Main page</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/home.png"
                    }
                    alt="home_page"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/main.png"
                    }
                    alt="main_page"
                  />
                </div>
                <h5>Register & Login Screen</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/camp_biology/register.png"
                    }
                    alt="register"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/login.png"
                    }
                    alt="login"
                  />
                </div>
                <h5>Campground add & edit & delete functionalities</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/camp.png"
                    }
                    alt="camp"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/new.png"
                    }
                    alt="new"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/edit.png"
                    }
                    alt="edit"
                  />
                </div>
                <h5>Campground details and review page</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/camp_biology/show.png"
                    }
                    alt="show"
                  />
                </div>
              </div>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-color" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Project5;
