import { useRef, useState } from "react";
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
import emailjs from "emailjs-com";

const About = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email sent successfully!");
          formRef.current.reset();
          setStatus("idle");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email.");
          setStatus("idle");
        }
      );
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
            <Form id="contact-form" ref={formRef} onSubmit={submitHandler}>
              <Form.Control
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="validationName">
                    <Form.Label>{t("about.contact.form.name")}</Form.Label>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      name="name"
                      placeholder={t("about.contact.form.placeholder_name")}
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
                      name="subject"
                      placeholder={t("about.contact.form.placeholder_subject")}
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
                      name="email"
                      placeholder={t("about.contact.form.placeholder_email")}
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
                      required
                      name="message"
                      placeholder={t("about.contact.form.placeholder_message")}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button
                  className="btn-color submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : t("about.contact.form.submit")}
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
