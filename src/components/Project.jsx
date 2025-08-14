import { useTranslation } from "react-i18next";
import Travel from "./projects/Travel";
import ImageConverter from "./projects/ImageConverter";
import Character from "./projects/Character";
import Expense from "./projects/Expense";
import Chat from "./projects/Chat";
import Shop from "./projects/Shop";
// import BCIT from "./projects/BCIT";
// import Camp from "./projects/Camp";
// import Foodoor from "./projects/Foodoor";

const Project = () => {
  const { t } = useTranslation();

  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>{t("project")}</h3>
        <div className="project-wrapper">
          <Travel />
          <ImageConverter />
          <Character />
          <Expense />
          <Chat />
          <Shop />
          {/* <BCIT /> */}
          {/* <Camp /> */}
          {/* <Foodoor /> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
