import { useState } from "react";
import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoDocker,
  BiLogoKubernetes,
  BiLogoGit,
  BiLogoGoogleCloud,
  BiLogoAws,
  BiSolidData,
} from "react-icons/bi";
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
              Hi there! I'm a backend developer with 3 years of hands-on
              experience building and maintaining scalable web applications. I
              specialize in backend development, cloud infrastructure (GCP), and
              optimizing system performance.
            </p>
            <p>
              I'm actively seeking opportunities to develop impactful software
              and web applications. I'm passionate about writing clean,
              maintainable code and delivering robust solutions, eager to
              contribute my expertise and continue growing as a developer.
            </p>
            <hr />
            <h4>Top Expertise</h4>
            <p className="mb-2">
              Backend developer with variety programming skills:
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
                  <BiLogoPython size={34} /> Python
                </li>
                <li>
                  <BiLogoJavascript size={34} /> JavaScript
                </li>
                <li>
                  <BiLogoNodejs size={34} /> Node.js
                </li>

                <li>
                  <BiLogoReact size={34} /> React
                </li>
              </ul>

              <ul className="no-list-style">
                <li>
                  <li>
                    <BiLogoGoogleCloud size={34} />
                    <BiLogoAws size={34} /> GCP/AWS
                  </li>
                  <BiLogoDocker size={34} />
                  <BiLogoKubernetes size={34} /> Docker/K8S
                </li>
                <li>
                  <BiSolidData size={34} /> SQL/NoSQL
                </li>
                <li>
                  <BiLogoGit size={34} /> Git
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
