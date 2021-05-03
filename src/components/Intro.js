import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const Intro = () => {
  const lightTheme = {
    "--mainColor": "#eaeaea",
    "--secondaryColor": "#fff",
    "--borderColor": "#c1c1c1",
    "--mainText": "black",
    "--secondaryText": "#4b5156",
    "--themeDotBorder": "#24292e",
    "--previewBg": "rgb(251, 249, 243, 0.8)",
    "--previewShadow": "#f0ead6",
    "--buttonColor": "black",
  };

  const blueTheme = {
    "--mainColor": "#15202b",
    "--secondaryColor": "#192734",
    "--borderColor": "#164d56",
    "--mainText": "#fff",
    "--secondaryText": "#eeeeee",
    "--themeDotBorder": "#fff",
    "--previewBg": "rgb(25, 39, 52, 0.8)",
    "--previewShadow": "#111921",
    "--buttonColor": "#17a2b8",
  };

  const greenTheme = {
    "--mainColor": "#606b56",
    "--secondaryColor": "#515a48",
    "--borderColor": "#164d56",
    "--mainText": "#fff",
    "--secondaryText": "hsl(0, 0%, 93%)",
    "--themeDotBorder": "#fff",
    "--previewBg": "rgb(81, 90, 72, 0.8)",
    "--previewShadow": "#2a2f25",
    "--buttonColor": "#669966",
  };

  const purpleTheme = {
    "--mainColor": "#46344E",
    "--secondaryColor": "#382a3f",
    "--borderColor": "#1d1520",
    "--mainText": "#fff",
    "--secondaryText": "#eeeeee",
    "--themeDotBorder": "#fff",
    "--previewBg": "rgb(29, 21, 32, 0.8)",
    "--previewShadow": "#2b202f",
    "--buttonColor": "#8534a3",
  };

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const getTheme = async () => {
    // check if user has stored a theme previously
    let theme = await localStorage.getItem("theme");
    if (theme == null) {
      setTheme("light");
    } else {
      setTheme(theme);
    }
  };

  useEffect(() => {
    getTheme();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onClick = (e) => {
    let mode = e.target.dataset["mode"]; // or dataset.mode
    setTheme(mode);
  };

  const setTheme = (mode) => {
    let theme = "";
    if (mode === "light") {
      theme = lightTheme;
    }
    if (mode === "blue") {
      theme = blueTheme;
    }
    if (mode === "green") {
      theme = greenTheme;
    }
    if (mode === "purple") {
      theme = purpleTheme;
    }
    // Object.keys(theme).map shouldn't use here. Unless you're going to use the array it creates from the return values of the callback.
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
    // key and value
    localStorage.setItem("theme", mode);
  };

  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Louis Chen</h1>
        </div>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>

            <ul id="navigation">
              <li>
                <a
                  href="https://github.com/LouisChen1013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/louis-chen-320816202/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="left-column">
            <img
              id="profile_pic"
              src={process.env.PUBLIC_URL + "/images/self.jpg"}
              alt="selfie"
            />
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <button
                onClick={onClick}
                data-mode="light"
                id="light-mode"
                className="theme-dot"
              ></button>
              <button
                onClick={onClick}
                data-mode="blue"
                id="blue-mode"
                className="theme-dot"
              ></button>
              <button
                onClick={onClick}
                data-mode="green"
                id="green-mode"
                className="theme-dot"
              ></button>
              <button
                onClick={onClick}
                data-mode="purple"
                id="purple-mode"
                className="theme-dot"
              ></button>
            </div>
            <p id="settings-note">
              *Theme settings will be saved for <br />
              your next vist
            </p>
          </div>
          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3 style={{ marginBottom: "20px" }}>Who Am I</h3>
                <Typewriter
                  options={{
                    wrapperClassName: "writer",
                    loop: true,
                    autoStart: true,
                    delay: 100,
                    stringSplitter,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I am a developer 💻")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("I am a system administrator ⚙️")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("I am a badminton lover 🏸")
                      .pauseFor(1500)
                      .start();
                  }}
                />
                <div id="corner-bl" className="corner"></div>
                <div id="corner-br" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
