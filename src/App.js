import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import DestructibleStructureBuilder from "./DestructibleStructureBuilder";
import BackroomsUnseenTapes from "./BackroomsUnseenTapes";
import CopyrightAdventure from "./CopyrightAdventure";
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
            </Routes>
        </Col>
    );
}

export default App;
