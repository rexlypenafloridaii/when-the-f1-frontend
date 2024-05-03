import axios from "axios";
import { useState, useEffect } from "react";
import { RacesIndex } from "./RacesIndex";
import { RacesShow } from "./RacesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [races, setRaces] = useState([]);
  const [isRacesShowVisible, setIsRacesShowVisible] = useState(false);
  const [currentRace, setCurrentRace] = useState({});

  const handleIndexRaces = () => {
    console.log("handleIndexRaces");
    axios.get("http://localhost:3000/races.json").then((response) => {
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
      <Signup />
      <Login />
      <RacesIndex races={races} onShowRace={handleShowRace} />
      <Modal show={isRacesShowVisible} onClose={handleClose}>
        <RacesShow race={currentRace} />
      </Modal>
    </main>
  );
}
