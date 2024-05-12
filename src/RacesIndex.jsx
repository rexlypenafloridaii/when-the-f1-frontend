/* eslint-disable react/prop-types */
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";

export function RacesIndex(props) {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
      <h1 className="text-center text-5xl">When The F1?</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 m-3 place-content-center">
        {props.races.map((race) => (
          <div className="grid border-2 text-center border-black shadow-xl" key={race.id}>
            <h2 className="text-2xl p-0">Track: {race.location}</h2>
            <p>Country: {race.country_name}</p>
            <button
              className="border-2 hover:border-t-4 mx-48 mb-2 border-black rounded-full"
              onClick={() => props.onShowRace(race)}
            >
              Race Time
            </button>
          </div>
        ))}
      </div>
      <div className="grid place-content-center">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
