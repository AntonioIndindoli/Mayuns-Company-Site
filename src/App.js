import { Col } from "react-bootstrap";
import LandingPage from "./LandingPage";
import DestructibleStructureBuilder from "./DestructibleStructureBuilder";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Col className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/destructible-structure-builder" element={<DestructibleStructureBuilder />} />
      </Routes>
    </Col >
  );
}

export default App;
