import axios from "axios";
import { useState, useEffect } from "react";
import { RacesIndex } from "./RacesIndex";
import { RacesShow } from "./RacesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [races, setRaces] = useState([]);
  const [isRacesShowVisible, setIsRacesShowVisible] = useState(false);
  const [currentRace, setCurrentRace] = useState({});

  const handleIndexRaces = () => {
    console.log("handleIndexRaces");
    axios.get("https://api.openf1.org/v1/sessions?year=2024&session_type=Race&session_name=Race").then((response) => {
      console.log(response.data);
      setRaces(response.data);
    });
  };

  const handleShowRace = (race) => {
    console.log("handleShowRace", race);
    setIsRacesShowVisible(true);
    setCurrentRace(race);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRacesShowVisible(false);
  };

  useEffect(handleIndexRaces, []);

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/races" element={<RacesIndex races={races} onShowRace={handleShowRace} />} />
        <Route path="/" element={<RacesIndex races={races} onShowRace={handleShowRace} />} />
      </Routes>
      <Modal show={isRacesShowVisible} onClose={handleClose}>
        <RacesShow race={currentRace} />
      </Modal>
    </main>
  );
}
