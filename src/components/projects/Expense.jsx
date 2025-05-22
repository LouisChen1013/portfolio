import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
const BASE_URL = import.meta.env.BASE_URL;
// import { CgScreen } from "react-icons/cg";

const Expense = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={`${BASE_URL}images/expense_tracker/expense_tracker.png`}
        alt="dashboard"
      />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">Expense Tracker</h6>
          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ms-4 github-icon" size={39} />
          </a>
          <a
            href="https://expense-tracker-demo-c.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <CgScreen className="ms-4 github-icon" size={39} /> */}
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
                <h3>Expense Tracker</h3>
                <h5>Objective:</h5>
                <p>
                  A web interface built with MongoDB, Express, React, Node(MERN)
                  for users to manage their daily transactions. Implementing
                  with CRUD operations where users can create, update, delete
                  their transactions and further review their spending history
                  from previous periods.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>
                    Interfaces to create, update, delete, and view transactions
                    (CRUD)
                  </li>
                  <li>View spending history and balance</li>
                  <li>Implement with the MERN Stack</li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>React</li>
                  <li>Git/Github</li>
                </ul>
                <h5>Demo Video</h5>
                <div className="ratio ratio-16x9">
                  <iframe
                    title="ChatBox Demo"
                    className="embed-responsive-item"
                    src="https://youtube.com/embed/FtE6UJupfzk"
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <h5>App Interface</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/expense_tracker/expense_tracker.png`}
                    alt="app_interface"
                  />
                </div>
                <h5>Interface to add a transaction</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/expense_tracker/add_transaction.png`}
                    alt="add_transaction"
                  />
                </div>
                <h5>Interface to edit a transaction</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/expense_tracker/edit_transaction.png`}
                    alt="add_transaction"
                  />
                </div>
                <h5>Interface to delete & review transactions</h5>
                <div className="img-container">
                  <img
                    src={`${BASE_URL}images/expense_tracker/delete_transaction.png`}
                    alt="delete_review_transactions"
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

export default Expense;
