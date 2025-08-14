import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
const BASE_URL = import.meta.env.BASE_URL;

const Character = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={`${BASE_URL}images/character_management_system/character_management_system.png`}
        alt="dashboard"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Character Management System</h6>
          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/character-management-system"
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
                <h3>Character Management System</h3>
                <h5>Objective:</h5>
                <p>
                  A desktop application that simulates a game server management
                  system. It features a graphical interface built with Tkinter
                  and a Flask-powered API backend, allowing users to manage game
                  characters with full CRUD functionality.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>
                    Interfaces to query/add/update/delete characters (CRUD)
                  </li>
                  <li>Display server summary and statistics</li>
                  <li>Built with Tkinter (GUI) and Flask (API)</li>
                  <li>Data stored using SQLite</li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>Python</li>
                  <li>Flask</li>
                  <li>Tkinter</li>
                  <li>SQLite</li>
                  <li>OOP</li>
                  <li>Unit Test</li>
                  <li>UML</li>
                  <li>Git/Github</li>
                </ul>
                <h5>UML</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/uml.png`}
                    alt="uml"
                  />
                </div>
                <h5>App Interface</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/character_management_system.png`}
                    alt="app_interface"
                  />
                </div>
                <h5>Interface to add a player/monster</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/add_player.png`}
                    alt="add_player"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/add_monster.png`}
                    alt="add_monster"
                  />
                </div>
                <h5>Interface to delete a character</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/delete_character.png`}
                    alt="delete_character"
                  />
                </div>
                <h5>Interface to update a character</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/update_character.png`}
                    alt="update_character"
                  />
                </div>
                <h5>Interface to toggle a player or monster</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/show_player.png`}
                    alt="show_player"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/show_monster.png`}
                    alt="show_monster"
                  />
                </div>
                <h5>Interface to display a character detail</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/character_management_system/show_detail.png`}
                    alt="show_detail"
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

export default Character;
