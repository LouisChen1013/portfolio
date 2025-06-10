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
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `${message}\n\nSend from ${email}, ${name}`
    );
    window.location.href = `mailto:chenhonglin1013@gmail.com?subject=${mailSubject}&body=${mailBody}`;
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
            <h4>{t("about.title")}</h4>
            <p>{t("about.paragraphs.0")}</p>
            <p>{t("about.paragraphs.1")}</p>
            <hr />
            <h4>{t("about.expertise.title")}</h4>
            <p className="mb-2">{t("about.expertise.description")}</p>
            <div className="mb-2">
              <a
                target="_blank"
                href="files/Louis_Chen.pdf"
                rel="noopener noreferrer"
              >
                {t("about.expertise.resume_en")}
              </a>
            </div>
            <div className="mb-3">
              <a
                target="_blank"
                href="files/Louis_Chen_C.pdf"
                rel="noopener noreferrer"
              >
                {t("about.expertise.resume_zh")}
              </a>
            </div>

            <div id="skills">
              <ul className="no-list-style">
                <li>
                  <BiLogoPython size={34} /> {t("about.skills.group1.0")}
                </li>
                <li>
                  <BiLogoJavascript size={34} /> {t("about.skills.group1.1")}
                </li>
                <li>
                  <BiLogoNodejs size={34} /> {t("about.skills.group1.2")}
                </li>
                <li>
                  <BiLogoReact size={34} /> {t("about.skills.group1.3")}
                </li>
              </ul>

              <ul className="no-list-style">
                <li>
                  <BiLogoGoogleCloud size={34} />
                  <BiLogoAws size={34} /> {t("about.skills.group2.0")}
                </li>
                <li>
                  <BiLogoDocker size={34} />
                  <BiLogoKubernetes size={34} /> {t("about.skills.group2.1")}
                </li>
                <li>
                  <BiSolidData size={34} /> {t("about.skills.group2.2")}
                </li>
                <li>
                  <BiLogoGit size={34} /> {t("about.skills.group2.3")}
                </li>
              </ul>
            </div>
          </div>

          <div className="contact">
            <h4 className="text-center">{t("about.contact.title")}</h4>
            <Form id="contact-form" onSubmit={submitHandler}>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationName">
                    <Form.Label>{t("about.contact.form.name")}</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      placeholder={t("about.contact.form.placeholder_name")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationSubject">
                    <Form.Label>{t("about.contact.form.subject")}</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      placeholder={t("about.contact.form.placeholder_subject")}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationEmail">
                    <Form.Label>{t("about.contact.form.email")}</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="email"
                      placeholder={t("about.contact.form.placeholder_email")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="MessageForm.ControlTextarea">
                    <Form.Label>{t("about.contact.form.message")}</Form.Label>
                    <Form.Control
                      as="textarea"
                      size="sm"
                      rows={6}
                      placeholder={t("about.contact.form.placeholder_message")}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button className="btn-color submit-btn" type="submit">
                  {t("about.contact.form.submit")}
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
