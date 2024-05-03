import axios from "axios";
import { useState, useEffect } from "react";
import { RacesIndex } from "./RacesIndex";

export function Content() {
  const [races, setRaces] = useState([]);

  const handleIndexRaces = () => {
    console.log("handleIndexRaces");
    axios.get("http://localhost:3000/races.json").then((response) => {
      console.log(response.data);
      setRaces(response.data);
    });
  };

  useEffect(handleIndexRaces, []);

  return (
    <main>
      <RacesIndex races={races} />
    </main>
  );
}
