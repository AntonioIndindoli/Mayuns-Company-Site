import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import DestructibleStructureBuilder from "./DestructibleStructureBuilder";
import DSBManual from "./DSBManual";
import { Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Col className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/destructible-structure-builder"
          element={<DestructibleStructureBuilder />}
        />
        <Route
          path="/destructible-structure-builder/manual"
          element={<DSBManual />}
        />
      </Routes>
    </Col>
  );
}

export default App;
