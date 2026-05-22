import { useEffect } from "react";

const themeStyles = {
  light: {
    "--mainColor": "#eaeaea",
    "--secondaryColor": "#fff",
    "--borderColor": "#c1c1c1",
    "--mainText": "black",
    "--secondaryText": "#4b5156",
    "--themeDotBorder": "#24292e",
    "--previewBg": "rgb(251, 249, 243, 0.8)",
    "--previewShadow": "#f0ead6",
    "--buttonColor": "black",
  },
  blueberry: {
    "--mainColor": "#1a1c25",
    "--secondaryColor": "#222530",
    "--borderColor": "#343a4e",
    "--mainText": "#88c0d0",
    "--secondaryText": "#bfd1d9",
    "--themeDotBorder": "#88c0d0",
    "--previewBg": "rgba(26, 28, 37, 0.9)",
    "--previewShadow": "#161821",
    "--buttonColor": "#5e81ac",
  },
  gruvboxMaterial: {
    "--mainColor": "#282828",
    "--secondaryColor": "#32302f",
    "--borderColor": "#504945",
    "--mainText": "#d4be98",
    "--secondaryText": "#a9b665",
    "--themeDotBorder": "#d8a657",
    "--previewBg": "rgba(40, 40, 40, 0.9)",
    "--previewShadow": "#1d2021",
    "--buttonColor": "#d8a657",
  },
  cyberpunk: {
    "--mainColor": "#0e1013",
    "--secondaryColor": "#1a1d23",
    "--borderColor": "#00ffff",
    "--mainText": "#ffffff",
    "--secondaryText": "#ff00ff",
    "--themeDotBorder": "#fcee0a",
    "--previewBg": "rgba(14, 16, 19, 0.9)",
    "--previewShadow": "#000000",
    "--buttonColor": "#fcee0a",
  },
};

const ThemeProvider = ({ theme = "light", children }) => {
  useEffect(() => {
    const selectedTheme = themeStyles[theme] || themeStyles.light;
    Object.entries(selectedTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    return () => {
      // reset or clear the CSS variables on cleanup
      Object.keys(selectedTheme).forEach((key) => {
        document.documentElement.style.removeProperty(key);
      });
    };
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
