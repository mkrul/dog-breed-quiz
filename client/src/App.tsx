import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bulma/css/bulma.min.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

function App() {
  const loc = window.location;
  axios.defaults.baseURL = `${loc.protocol}//${loc.hostname}${
    loc.hostname === "localhost" ? ":3000" : ""
  }`;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
