import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const BCIT = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={process.env.PUBLIC_URL + "/images/BCIT_SOCAS/dash.png"}
        alt="dashboard"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">
            Submission Management Dashboard
          </h6>

          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/SubmissionManagementDashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ml-4 github-icon" size={39} />
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
                <h3>Submission Management Dashboard</h3>
                <h5>Objective:</h5>
                <p>
                  Develop a management dashboard that allows faculty
                  members/instructors to review projects submitted, hold
                  discussions about each project, assign projects to different
                  programs, and generate documents (Student Catalogue) required.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>Project submission form</li>
                  <li>Integration with MySQL database</li>
                  <li>
                    Accounts/Credentials to login for faculty members & staff
                  </li>
                  <li>
                    Datatables to display projects data fetched from MySQL
                  </li>
                  <li>Auto documents generation (PDF)</li>
                  <li>Interface(s) to filter/edit/categorize projects</li>
                  <li>
                    Interface to make notes/comments/feedback on each project
                  </li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>EJS</li>
                  <li>Bootstrap</li>
                  <li>Datatables</li>
                  <li>MySQL (MariaDB)</li>
                  <li>Git/Github</li>
                </ul>
                <h5>Demo Video</h5>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="ISSP Demo"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/UutQcFizdLk"
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <h5>Submission Form</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/BCIT_SOCAS/submission.png"
                    }
                    alt="submission"
                  />
                </div>
                <h5>Login Screen for Management Portal</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/BCIT_SOCAS/login_page.png"
                    }
                    alt="login_page"
                  />
                </div>
                <h5>Logged-in view</h5>
                <div className="img-container">
                  <img
                    src={process.env.PUBLIC_URL + "/images/BCIT_SOCAS/dash.png"}
                    alt="dashboard"
                  />
                </div>
                <h5>Sample Interface to leave feedback for each project</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/BCIT_SOCAS/feedback.png"
                    }
                    alt="feedback"
                  />
                </div>
                <h5>Interface to generate documents</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/BCIT_SOCAS/student_catalogue.png"
                    }
                    alt="student_catalogue"
                  />
                </div>
                <h5>Sample document extracted with dummy data</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/BCIT_SOCAS/document_generation.png"
                    }
                    alt="document_generation"
                  />
                </div>
                <h5>Interface to change Settings for incoming submissions</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/BCIT_SOCAS/setting.png"
                    }
                    alt="setting"
                  />
                </div>
                <h5>Interface to manage users</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/BCIT_SOCAS/user_management.png"
                    }
                    alt="user_management"
                  />
                </div>
                <h5>Interface to add users</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/BCIT_SOCAS/add_user.png"
                    }
                    alt="add_user"
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

export default BCIT;
