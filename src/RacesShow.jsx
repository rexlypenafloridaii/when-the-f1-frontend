/* eslint-disable react/prop-types */
export function RacesShow(props) {
  return (
    <div>
      <h1>Race information</h1>
      <p>Track: {props.race.location}</p>
      <p>Time: {props.race.date_start}</p>
    </div>
  );
}
