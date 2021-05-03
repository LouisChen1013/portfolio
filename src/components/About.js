import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { Button } from "react-bootstrap";

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
            <p>
              Fullstack developer with variety programming skills: <br />
              <a target="_blank" href="files/resume.pdf">
                Download Resume
              </a>
            </p>

            <div id="skills">
              <ul className="no-list-style">
                <li>
                  <FaPython size={32} /> Python
                </li>
                <li>
                  <IoLogoJavascript size={32} /> JavaScript
                </li>
                <li>
                  <FaNodeJs size={32} /> NodeJS
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
                  <GrMysql size={32} /> MySQL
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
            <h4 style={{ textAlign: "center" }}>Contact</h4>
            <form id="contact-form" onSubmit={submitHandler}>
              <label>Name</label>
              <input
                required
                className="input-field"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label>Subject</label>
              <input
                required
                className="input-field"
                type="text"
                name="subject"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <label>Email</label>
              <input
                required
                className="input-field"
                type="text"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>Message</label>
              <textarea
                required
                className="input-field"
                rows="6"
                name="message"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <Button className="btn-color submit-btn" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
