import BCIT from "./projects/BCIT";
import Expense from "./projects/Expense";
import Character from "./projects/Character";
import Shop from "./projects/Shop";
import Camp from "./projects/Camp";
import Chat from "./projects/Chat";
// import Foodoor from "./projects/Foodoor";

const Project = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
        <div className="project-wrapper">
          <BCIT />
          <Camp />
          <Chat />
          <Expense />
          <Character />
          <Shop />
          {/* <Foodoor /> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
