import { useEffect, useState } from "react";

import AirlineList from "./AirlineList";
import Search from "./Search";

function HomePage() {
  const [airlines, setAirlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/airlines")
      .then((r) => r.json())
      .then((airlinesArray) => {
        setAirlines(airlinesArray);
      });
  }, []);

  function handleAddAirline(newAirline) {
    const updatedAirlinesArray = [...airlines, newAirline];
    setAirlines(updatedAirlinesArray);
  }

  function handleDeleteAirline(id) {
    const updatedAirlinesArray = airlines.filter((airline) => airline.id !== id);
    setAirlines(updatedAirlinesArray);
  }

  function handleUpdateAirline(updatedAirline) {
    const updatedAirlinesArray = airlines.map((airline) => {
      return airline.id === updatedAirline.id ? updatedAirline : airline;
    });
    setAirlines(updatedAirlinesArray);
  }

  const displayedAirlines = airlines.filter((airline) => {
    return airline.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AirlineList
        airlines={displayedAirlines}
        onDeleteAirline={handleDeleteAirline}
        onUpdateAirline={handleUpdateAirline}
      />
    </main>
  );
}

export default HomePage;
