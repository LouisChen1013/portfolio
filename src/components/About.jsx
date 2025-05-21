import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
// import { Button, Form } from "react-bootstrap";
import { Row, Col, Button, Form } from "react-bootstrap";

const About = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    window.location.href = `mailto:chenhonglin1013@gmail.com?subject=${subject}&body=${message} %0D%0A%0D%0A Send from ${email}, ${name}`;
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>About me</h4>
            <p>
              Hi there, I'm a recent graduate from BCIT Computer Information
              Technology Program with experience in Full-Stack Web/Moblie
              Development, DevOps, and System Administration.
            </p>
            <p>
              I'm currently looking for a job and opportunity to contribute my
              skills and knowledge to develop software/web application.
            </p>
            <hr />
            <h4>Top Expertise</h4>
            <p className="mb-2">
              Fullstack developer with variety programming skills:
            </p>
            <div className="mb-2">
              <a
                target="_blank"
                href="files/Louis_Chen.pdf"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
            <div className="mb-3">
              <a
                target="_blank"
                href="files/Louis_Chen_C.pdf"
                rel="noopener noreferrer"
              >
                下載履歷
              </a>
            </div>

            <div id="skills">
              <ul className="no-list-style">
                <li>
                  <FaPython size={32} /> Python
                </li>
                <li>
                  <IoLogoJavascript size={32} /> JavaScript
                </li>
                <li>
                  <FaNodeJs size={32} /> Node.js
                </li>

                <li>
                  <FaReact size={32} /> React
                </li>
              </ul>

              <ul className="no-list-style">
                <li>
                  <FaHtml5 size={32} />
                  <FaCss3Alt size={32} /> HTML/CSS
                </li>
                <li>
                  <FaDatabase size={32} /> SQL/NoSQL
                </li>
                <li>
                  <FaGitAlt size={32} /> Git
                </li>
                <li>
                  <FaAws size={32} /> AWS
                </li>
              </ul>
            </div>
          </div>

          <div className="contact">
            <h4 className="text-center">Contact</h4>
            <Form id="contact-form" onSubmit={submitHandler}>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      placeholder="Enter Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="MessageForm.ControlTextarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      size="sm"
                      rows={6}
                      placeholder="Enter Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button className="btn-color submit-btn" type="submit">
                  Send
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
