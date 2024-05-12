/* eslint-disable react/prop-types */
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";

export function RacesIndex(props) {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([
    {
      date: new Date(2024, 4, 5), // May 11, 2024 (Note: month is 0-based)
      title: "Miami",
    },
  ]);

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const event = events.find((event) => event.date.getTime() === date.getTime());
      return event ? <p>{event.title}</p> : null;
    }
  };

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
      <h1 className="text-center text-5xl">When The F1?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 m-3 place-content-center">
        {props.races.map((race) => (
          <div className="grid border-2 text-center border-black shadow-xl bg-gray-200" key={race.id}>
            <h2 className="text-2xl p-0">Track: {race.circuit_short_name}</h2>
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
        <Calendar onChange={onChange} value={value} tileContent={tileContent} />
      </div>
    </div>
  );
}
