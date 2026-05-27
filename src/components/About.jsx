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
  BiDownload,
  BiMessageDetail,
  BiInfinite,
} from "react-icons/bi";
import { SiTerraform, SiGrafana } from "react-icons/si";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const BASE_URL = import.meta.env.BASE_URL;

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
        },
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

            <div id="skills">
              <div className="skills-grid">
                <div className="skill-tag">
                  <BiLogoPython size={24} />{" "}
                  <span>{t("about.skills.group1.0")}</span>
                </div>
                <div className="skill-tag">
                  <BiLogoJavascript size={24} />{" "}
                  <span>{t("about.skills.group1.1")}</span>
                </div>
                <div className="skill-tag">
                  <BiLogoNodejs size={24} />{" "}
                  <span>{t("about.skills.group1.2")}</span>
                </div>
                <div className="skill-tag">
                  <BiLogoReact size={24} />{" "}
                  <span>{t("about.skills.group1.3")}</span>
                </div>
                <div className="skill-tag">
                  <BiLogoGoogleCloud size={24} />{" "}
                  <span>{t("about.skills.group2.0")}</span>
                </div>
                <div className="skill-tag">
                  <BiLogoDocker size={24} />{" "}
                  <span>{t("about.skills.group2.1")}</span>
                </div>
                <div className="skill-tag">
                  <BiSolidData size={24} />{" "}
                  <span>{t("about.skills.group2.2")}</span>
                </div>
                <div className="skill-tag">
                  <BiLogoGit size={24} />{" "}
                  <span>{t("about.skills.group2.3")}</span>
                </div>
                <div className="skill-tag">
                  <SiTerraform size={24} />{" "}
                  <span>{t("about.skills.group3.0")}</span>
                </div>
                <div className="skill-tag">
                  <SiGrafana size={24} />{" "}
                  <span>{t("about.skills.group3.1")}</span>
                </div>
                <div className="skill-tag">
                  <BiInfinite size={24} />{" "}
                  <span>{t("about.skills.group3.2")}</span>
                </div>
                <div className="skill-tag">
                  <BiMessageDetail size={24} />{" "}
                  <span>{t("about.skills.group3.3")}</span>
                </div>
              </div>
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
