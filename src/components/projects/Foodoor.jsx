import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
const BASE_URL = import.meta.env.BASE_URL;

const Foodoor = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={`${BASE_URL}images/foodoor/foodoor_main.jpg`}
        alt="main"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Foodoor</h6>
          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/foodoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" ml-4 github-icon" size={39} />
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
                <h3>Foodoor</h3>
                <h5>Objective:</h5>
                <p>
                  This project is aimed to build a food ordering service (e.g.,
                  Uber, DoorDash, Foodpanda, and ..etc) on a mobile device.
                  Foodoor is a simple service to order food from a variety of
                  restaurants online. Enjoy your favourite dishes across
                  different cuisines and flavours delivered to your door step.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>User login & logout & registration portals</li>
                  <li>Interface to view a user profile</li>
                  <li>List all the restaurants nearby</li>
                  <li>List all the food provided by a restaurant</li>
                  <li>Interface to search food/restaurant by keyword</li>
                  <li>Interface to sort restaurants by rating and cost</li>
                  <li>Interface to place/modify/delete an order</li>
                  <li>Email confirmation upon completion of an order</li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>React Native</li>
                  <li>Firebase</li>
                  <li>SendGrid API</li>
                  <li>Git/Github</li>
                </ul>
                <h5>Demo Video</h5>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="foodoor Demo"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/oEgh8JED3FY"
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <h5>User Registration & Login</h5>
                <div className="food-img-container">
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_sign_up.jpg`}
                      alt="sign_up"
                    />
                  </div>
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_sign_in.jpg`}
                      alt="app_interface"
                    />
                  </div>
                </div>
                <h5>
                  List all the restaurants nearby & List all the food provided
                  by a restaurant
                </h5>
                <div className="food-img-container">
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_restaurants.jpg`}
                      alt="restaurants"
                    />
                  </div>
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_food.jpg`}
                      alt="food"
                    />
                  </div>
                </div>
                <h5>
                  Search food/restaurant by keyword & Sort restaurants by rating
                  or cost
                </h5>
                <div className="food-img-container">
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_search.jpg`}
                      alt="search"
                    />
                  </div>
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_sort.jpg`}
                      alt="sort"
                    />
                  </div>
                </div>
                <h5>Email confirmation upon completion of an order</h5>
                <div className="food-img-container">
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_checkout.jpg`}
                      alt="search"
                    />
                  </div>
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_email.jpg`}
                      alt="sort"
                    />
                  </div>
                </div>
                <h5>User profile/Logout</h5>
                <div className="food-img-container">
                  <div>
                    <img
                      src={`${BASE_URL}images/foodoor/foodoor_profile.jpg`}
                      alt="search"
                      style={{ width: "40%" }}
                    />
                  </div>
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

export default Foodoor;
