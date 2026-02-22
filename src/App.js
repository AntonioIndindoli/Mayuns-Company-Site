import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import DestructibleStructureBuilder from "./DestructibleStructureBuilder";
import BackroomsUnseenTapes from "./BackroomsUnseenTapes";
import CopyrightAdventure from "./CopyrightAdventure";
import About from "./About";
import SupportCenter from "./SupportCenter";
import Legal from "./Legal";
import { Col } from "react-bootstrap";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [location.pathname]);
    return (
        <Col className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/destructible-structure-builder"
                    element={<DestructibleStructureBuilder />}
                />
                <Route
                    path="/backrooms-unseen-tapes"
                    element={<BackroomsUnseenTapes />}
                />
                <Route
                    path="/copyright-adventure"
                    element={<CopyrightAdventure />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/support" element={<SupportCenter />} />
                <Route path="/support-center" element={<SupportCenter />} />
                <Route path="/legal" element={<Legal />} />
            </Routes>
        </Col>
    );
}

export default App;
