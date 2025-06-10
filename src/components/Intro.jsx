import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider theme={currentTheme}>
      <section className="s1">
        <div className="main-container">
          <div className="top-wrapper">
            <div className="language-floating">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={i18n.language === "en" ? "active" : ""}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("zh")}
                className={i18n.language === "zh" ? "active" : ""}
              >
                中文
              </button>
            </div>
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
                    <FaGithub size={32} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/louis-chen-320816202/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={32} />
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
              <h5 style={{ textAlign: "center", lineHeight: 1 }}>
                {t("theme")}
              </h5>

              <div id="theme-options-wrapper">
                {["light", "almond", "blue", "charcoal"].map((mode) => (
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
                {t("theme_description")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
            <div className="right-column">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3 style={{ marginBottom: "20px" }}>{t("intro")}</h3>
                  <Typewriter
                    key={i18n.language}
                    options={{
                      wrapperClassName: "writer",
                      loop: true,
                      autoStart: true,
                      delay: 100,
                      stringSplitter,
                    }}
                    onInit={(typewriter) => {
                      const base = t("typewriter.base_prefix");
                      const roles = t("typewriter.roles", {
                        returnObjects: true,
                      });

                      const getLength = (str) => stringSplitter(str).length;
                      let chain = typewriter.typeString(base);

                      roles.forEach((curr, idx) => {
                        const fullRole = `${curr.connector}${curr.label} ${curr.emoji}`;
                        chain = chain.typeString(fullRole).pauseFor(1500);

                        const deleteCount = getLength(fullRole);
                        if (idx < roles.length - 1) {
                          chain = chain.deleteChars(deleteCount);
                        } else {
                          chain = chain
                            .deleteChars(deleteCount)
                            .deleteChars(getLength(base));
                        }
                      });

                      chain.start();
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
