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
  green: {
    "--mainColor": "#606b56",
    "--secondaryColor": "#515a48",
    "--borderColor": "#164d56",
    "--mainText": "#fff",
    "--secondaryText": "hsl(0, 0%, 93%)",
    "--themeDotBorder": "#fff",
    "--previewBg": "rgb(81, 90, 72, 0.8)",
    "--previewShadow": "#2a2f25",
    "--buttonColor": "#669966",
  },
  purple: {
    "--mainColor": "#46344E",
    "--secondaryColor": "#382a3f",
    "--borderColor": "#1d1520",
    "--mainText": "#fff",
    "--secondaryText": "#eeeeee",
    "--themeDotBorder": "#fff",
    "--previewBg": "rgb(29, 21, 32, 0.8)",
    "--previewShadow": "#2b202f",
    "--buttonColor": "#8534a3",
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
