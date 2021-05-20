import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Project />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
