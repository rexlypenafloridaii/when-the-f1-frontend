/* eslint-disable react/prop-types */
export function RacesIndex(props) {
  return (
    <div>
      <h1>When The F1?</h1>
      {props.races.map((race) => (
        <div key={race.id}>
          <h2>Track: {race.location}</h2>
          <p>Country: {race.country_name}</p>
          <button onClick={() => props.onShowRace(race)}>Race Time</button>
        </div>
      ))}
    </div>
  );
}
