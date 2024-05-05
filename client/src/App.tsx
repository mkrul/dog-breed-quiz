import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ResultsPage from "./components/pages/ResultsPage";
import BreedsPage from "./components/pages/BreedsPage";
import DnaPage from "./components/pages/DnaPage";
import AlignmentPage from "./components/pages/AlignmentPage";
import DogsPage from "./components/pages/DogsPage";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/test/alignment" element={<AlignmentPage />} />
            <Route path="/test/breeds" element={<BreedsPage />} />
            <Route path="/test/dna" element={<DnaPage />} />
            <Route path="/test/dogs" element={<DogsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
