import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
const BASE_URL = import.meta.env.BASE_URL;

const Travel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={`${BASE_URL}images/travel_biology/home.png`}
        alt="home"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Travel Biology</h6>

          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/travel-biology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ms-4 github-icon" size={39} />
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
                <h3>Travel Biology</h3>
                <h5>Objective:</h5>
                <p>
                  Travel Biology is an all-in-one travel planning web
                  application. It enables users to create and organize detailed
                  trips, manage budgets, plan daily schedules, map out
                  destinations, track flights, and more — all in a clean,
                  responsive interface.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>Plan and share trips</li>
                  <li>Create daily schedules with stops/attractions</li>
                  <li>Display stops on interactive maps (Mapbox)</li>
                  <li>Add and manage flight information</li>
                  <li>Track and convert budget in multiple currencies</li>
                  <li>Upload and browse trip photos</li>
                  <li>User registration and authentication (JWT)</li>
                  <li>Maintain personal to-do lists for trips</li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>Node.js, Express.js</li>
                  <li>Passport.js with JWT</li>
                  <li>PostgreSQL using Sequelize ORM</li>
                  <li>React (with Vite), Bootstrap CSS</li>
                  <li>Cloudinary</li>
                  <li>Mapbox</li>
                  <li>Git/Github</li>
                </ul>
                <br />
                <h5>Home Page & Trip Overview</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/home.png`}
                    alt="home_page"
                  />
                </div>
                <h5>Register & Login</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/register.png`}
                    alt="register"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/login.png`}
                    alt="login"
                  />
                </div>
                <h5>Daily Schedule & Stops (Map Integration)</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/daily_schedule.png`}
                    alt="daily_schedule"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/map_with_stops.png`}
                    alt="map_with_stops"
                  />
                </div>
                <h5>Flight Info & Trip Budget</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/flight_info.png`}
                    alt="flight_info"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/budget.png`}
                    alt="budget"
                  />
                </div>
                <h5>Trip Photos & To-Do List</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/todo_list.png`}
                    alt="todo_list"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/travel_biology/trip_photos.png`}
                    alt="trip_photos"
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

export default Travel;
