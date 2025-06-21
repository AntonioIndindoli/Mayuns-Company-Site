import { Col } from "react-bootstrap";
import Home from "./Home";
import LandingPage from "./LandingPage";
import AlbumPage from "./AlbumPage";
import About from "./About";
import Extras from "./Extras";
import UnityDemo from "./UnityDemo";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Col className="App">
      <Routes>
        <Route exact path="/Album" element={<AlbumPage />} />
        <Route exact path="/Blog" element={<Home />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/extras" element={<Extras />} />
        <Route exact path="/unity-demo" element={<UnityDemo />} />
      </Routes>
    </Col >
  );
}

export default App;
