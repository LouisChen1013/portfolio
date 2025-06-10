import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  const diplomaItems = t("education.diploma.items", { returnObjects: true });
  const bachelorItems = t("education.bachelor.items", { returnObjects: true });

  return (
    <section className="s2">
      <div className="main-container">
        <h3 className="text-center">{t("education.title")}</h3>

        <div className="education">
          <h5>{t("education.diploma.school")}</h5>
          <h6>{t("education.diploma.degree")}</h6>
          <h6>{`${t("education.diploma.date")} - ${t(
            "education.diploma.honour"
          )}`}</h6>
          <ul>
            {diplomaItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="education">
          <h5>{t("education.bachelor.school")}</h5>
          <h6>{t("education.bachelor.degree")}</h6>
          <h6>{t("education.bachelor.date")}</h6>
          <ul>
            {bachelorItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
