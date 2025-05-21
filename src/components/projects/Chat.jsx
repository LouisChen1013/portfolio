import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
// import { CgScreen } from "react-icons/cg";

const Chat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project">
      <img className="thumbnail" src="/images/chatbox/main.png" alt="home" />
      <div className="project-preview">
        <div className="text-center">
          <h6 className="project-title mb-3">ChatBox</h6>

          <Button
            className="btn-color justify-content-center"
            onClick={handleShow}
          >
            Read More
          </Button>
          <a
            href="https://github.com/LouisChen1013/chatbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ms-4 github-icon" size={39} />
          </a>
          <a
            href="https://lou-chatbox-app.herokuapp.com/"
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
                <h3>ChatBox</h3>
                <h5>Objective:</h5>
                <p>
                  ChatBox is an online communication plateform that allows you
                  and your website visitors to have text-based conversations via
                  the web. It provides real-time message and location exchange
                  services. The goal of this app is to provide an easy-to-use
                  interface for users to chat/work with their teams.
                </p>
                <h5>Key Features:</h5>
                <ul>
                  <li>Create a chat room</li>
                  <li>Join a chat room</li>
                  <li>Instant messaging with time</li>
                  <li>Real time location sharing</li>
                </ul>
                <h5>Technologies:</h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Socket.io</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>Heroku</li>
                  <li>Git/Github</li>
                </ul>
                <a
                  href="https://lou-chatbox-app.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <h5>Demo Video</h5>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="ChatBox Demo"
                    className="embed-responsive-item"
                    src="https://youtube.com/embed/HTOVv7WH1ko"
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <br />
                <h5>Main page</h5>
                <div className="img-container">
                  <img src="/images/chatbox/main.png" alt="main_page" />
                </div>
                <h5>Chat Room</h5>
                <div className="img-container">
                  <img src="/images/chatbox/chat_room.png" alt="chat_room" />
                </div>
                <h5>User Join & Leave</h5>
                <div className="img-container">
                  <img src="/images/chatbox/join.png" alt="join" />
                </div>
                <div className="img-container">
                  <img src="/images/chatbox/leave.png" alt="leave" />
                </div>
                <h5>Chat & Share Location</h5>
                <div className="img-container">
                  <img src="/images/chatbox/chat.png" alt="chat" />
                </div>
                <div className="img-container">
                  <img
                    src="/images/chatbox/share_location.png"
                    alt="share_location"
                  />
                </div>
                <h5>Leave and Error Popup</h5>
                <div className="img-container">
                  <img
                    src="/images/chatbox/leave_confirm.png"
                    alt="leave_confirm"
                  />
                </div>
                <div className="img-container">
                  <img src="/images/chatbox/join_error.png" alt="join_error" />
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

export default Chat;
