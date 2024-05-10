/* eslint-disable react/prop-types */
export function RacesShow(props) {
  const date = new Date(props.race.date_start);
  const localDate = date.toLocaleString();
  return (
    <div className="text-center">
      <h1 className="text-2xl">Race Information</h1>
      <p>Track: {props.race.location}</p>
      <p>Local Start Time: {props.race.date_start}</p>
      <p className="text-2xl">My Start Time: {localDate}</p>
    </div>
  );
}
