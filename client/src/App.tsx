import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

const theme = createTheme({
  palette: {
    text: {
      primary: "#00575E",
    },
  },
  typography: {
    allVariants: {
      letterSpacing: "-0.025rem",
      lineHeight: 1.25,
    },
    fontSize: 18,
    fontWeightMedium: 500,
    fontFamily: [
      "DM Sans",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
