export function RacesShow(props) {
  return (
    <div>
      <h1>Race information</h1>
      <p>Track: {props.race.location}</p>
      <p>Date: {props.race.date}</p>
      <p>Time: {props.race.time}</p>
    </div>
  );
}
