import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";

const Project2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={
          process.env.PUBLIC_URL + "/images/expense_tracker/expense_tracker.png"
        }
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
            href="https://github.com/LouisChen1013/react-expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ml-4 github-icon" size={39} />
          </a>
          <a
            href="https://expense-tracker-demo-c.herokuapp.com/"
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
                <h3>Expense Tracker</h3>
                <h5>Objective:</h5>
                <p>
                  Create a web interface for users to manage their daily
                  transactions. Users can add and delete their transactions and
                  further review their spending history from previous periods.
                </p>
                <h5>Key Features: </h5>
                <ul>
                  <li>Interfaces to add/delete transactions</li>
                  <li>View spending history</li>
                  <li>Implement with the MERN Stack</li>
                </ul>
                <h5>Technologies: </h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>React</li>
                  <li>Git/Github</li>
                </ul>
                <a
                  href="https://expense-tracker-demo-c.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <h5>App Interface</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/expense_tracker/expense_tracker.png"
                    }
                    alt="app_interface"
                  />
                </div>
                <h5>Interface to add a transaction</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/expense_tracker/add_transaction.png"
                    }
                    alt="add_transaction"
                  />
                </div>
                <h5>Interface to delete/review transactions</h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/expense_tracker/history_remove.png"
                    }
                    alt="delete_review_transactions"
                  />
                </div>
                <h5>Interface to check your balance </h5>
                <div className="img-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/expense_tracker/balance.png"
                    }
                    alt="balance"
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

export default Project2;
