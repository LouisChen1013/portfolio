import { useState, useCallback } from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import ThemeProvider from "../themes/ThemeProvider";
const BASE_URL = import.meta.env.BASE_URL;

const Intro = () => {
  // Initialize theme from localStorage or default to 'light'
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const changeTheme = useCallback((mode) => {
    setCurrentTheme(mode);
    localStorage.setItem("theme", mode);
  }, []);

  const stringSplitter = useCallback((string) => {
    return new GraphemeSplitter().splitGraphemes(string);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
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
                src={`${BASE_URL}images/self2.jpg`}
                alt="selfie"
              />
              <h5 style={{ textAlign: "center", lineHeight: 0 }}>
                Personalize Theme
              </h5>

              <div id="theme-options-wrapper">
                {["light", "blue", "green", "purple"].map((mode) => (
                  <button
                    key={mode}
                    data-mode={mode}
                    className={`theme-dot ${
                      currentTheme === mode ? "active" : ""
                    }`}
                    onClick={() => changeTheme(mode)}
                    id={`${mode}-mode`}
                    aria-label={`Switch to ${mode} theme`}
                  ></button>
                ))}
              </div>
              <p id="settings-note">
                *Theme settings will be saved for <br />
                your next visit
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
                        .deleteChars(11)
                        .typeString("cloud engineer ☁️")
                        .pauseFor(1500)
                        .deleteChars(16)
                        .typeString("badminton lover 🏸")
                        .pauseFor(1500)
                        .deleteChars(19)
                        .typeString("also a hiker 🥾")
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
    </ThemeProvider>
  );
};

export default Intro;
