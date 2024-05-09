/* eslint-disable react/prop-types */
export function RacesShow(props) {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Race Information</h1>
      <p>Track: {props.race.location}</p>
      <p>Local Start Time: {props.race.date_start}</p>
    </div>
  );
}
