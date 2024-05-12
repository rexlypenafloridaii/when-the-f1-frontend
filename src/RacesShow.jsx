/* eslint-disable react/prop-types */
export function RacesShow(props) {
  const date = new Date(props.race.date_start);
  const localDate = date.toLocaleString();
  return (
    <div className="text-center bg-main-pattern">
      <p className="text-2xl">Track: {props.race.location}</p>
      <p className="text-lg">Your Start Time: {localDate}</p>
    </div>
  );
}
