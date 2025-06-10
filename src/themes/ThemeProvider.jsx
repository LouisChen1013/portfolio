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
  blue: {
    "--mainColor": "#15202b",
    "--secondaryColor": "#192734",
    "--borderColor": "#164d56",
    "--mainText": "#fff",
    "--secondaryText": "#eeeeee",
    "--themeDotBorder": "#fff",
    "--previewBg": "rgb(25, 39, 52, 0.8)",
    "--previewShadow": "#111921",
    "--buttonColor": "#17a2b8",
  },
  almond: {
    "--mainColor": "#fdf6f0",
    "--secondaryColor": "#fffaf5",
    "--borderColor": "#e1d7cf",
    "--mainText": "#3b2f2f",
    "--secondaryText": "#6e5e5e",
    "--themeDotBorder": "#3b2f2f",
    "--previewBg": "rgba(253, 246, 240, 0.9)",
    "--previewShadow": "#e9dcd1",
    "--buttonColor": "#d4a373",
  },
  charcoal: {
    "--mainColor": "#1a1a1a",
    "--secondaryColor": "#2e2e2e",
    "--borderColor": "#444444",
    "--mainText": "#ffffff",
    "--secondaryText": "#cccccc",
    "--themeDotBorder": "#ffffff",
    "--previewBg": "rgba(20, 20, 20, 0.9)",
    "--previewShadow": "#000000",
    "--buttonColor": "#bbbbbb",
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
