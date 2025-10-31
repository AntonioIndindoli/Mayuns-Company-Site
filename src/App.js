import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import DestructibleStructureBuilder from "./DestructibleStructureBuilder";
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
      </Routes>
    </Col>
  );
}

export default App;
