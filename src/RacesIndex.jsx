/* eslint-disable react/prop-types */
export function RacesIndex(props) {
  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl">When The F1?</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 m-6">
        {props.races.map((race) => (
          <div className="grid border-2 text-center border-black" key={race.id}>
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
    </div>
  );
}
