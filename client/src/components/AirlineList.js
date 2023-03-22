import AirlineCard from "./AirlineCard";

function AirlineList({ airlines, onDeleteAirline, onUpdateAirline }) {
  return (
    <ul className="cards">
      {airlines.map((airline) => {
        return (
          <AirlineCard
            key={airline.id}
            airline={airline}
            onDeleteAirline={onDeleteAirline}
            onUpdateAirline={onUpdateAirline}
          />
        );
      })}
    </ul>
  );
}

export default AirlineList;
