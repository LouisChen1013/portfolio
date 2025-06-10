import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = t("experience.jobs", { returnObjects: true });

  return (
    <section className="s3">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>{t("experience.title")}</h3>
        {experiences.map((job, index) => (
          <div className="work" key={index}>
            <h5>{job.position}</h5>
            <h6>{job.company}</h6>
            <h6>{job.date}</h6>
            <ul>
              {job.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
