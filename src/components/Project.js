import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";
import Project5 from "./projects/Project5";
import Project6 from "./projects/Project6";

const Project = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
        <div className="project-wrapper">
          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
          <Project6 />
        </div>
      </div>
    </section>
  );
};

export default Project;
