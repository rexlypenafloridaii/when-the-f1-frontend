export function RacesIndex(props) {
  return (
    <div>
      <h1>All Races</h1>
      {props.races.map((race) => (
        <div key={race.id}>
          <h2>{race.location}</h2>
          <p>{race.date}</p>
          <p>{race.time}</p>
          <button onClick={() => props.onShowRace(race)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
