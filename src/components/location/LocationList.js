import React, { useState, useEffect } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = () => {
  // The initial state is an empty array
  const [locations, setlocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return LocationManager.getAll().then((locationsFromAPI) => {
      setlocations(locationsFromAPI);
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {locations.map((location) => (
        <LocationCard />
      ))}
    </div>
  );
};
export default LocationList;
