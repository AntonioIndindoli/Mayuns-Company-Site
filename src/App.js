import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Col } from "react-bootstrap";
import LandingPage from "./LandingPage";
import DestructibleStructureBuilder from "./DestructibleStructureBuilder";
import './App.css';

function App() {
  return (
      <Col className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/destructible-structure-builder" element={<DestructibleStructureBuilder />} />
        </Routes>
      </Col>
  );
}

export default App;
